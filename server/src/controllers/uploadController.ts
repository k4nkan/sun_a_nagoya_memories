import { Request, Response } from "express";
import sharp from "sharp";
import { supabase } from "../supabase/client";
import { v4 as uuid } from "uuid";
import { Errors } from "../utils/errors";

export const uploadData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const file = req.file;
  const day = req.body.day;
  const message = req.body.message || null;

  if (!file || !day) {
    const err = Errors.NO_FILE_OR_DAY;
    res.status(err.status).json({ error: err.message });
    return;
  }

  try {
    const webpBuffer = await sharp(file.buffer, { failOnError: false })
      .rotate()
      .resize({ width: 800 })
      .webp({ quality: 80 })
      .toBuffer();

    const fileName = `${uuid()}.webp`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from("nagoya-photos")
      .upload(fileName, webpBuffer, {
        contentType: "image/webp",
      });

    if (storageError) {
      const err = Errors.STORAGE_UPLOAD_FAIL(storageError.message);
      res.status(err.status).json({ error: err.message });
      return;
    }

    const { data: publicURLData } = supabase.storage
      .from("nagoya-photos")
      .getPublicUrl(storageData.path);

    const imageURL = publicURLData?.publicUrl;
    if (!imageURL) {
      const err = Errors.PUBLIC_URL_FAIL;
      res.status(err.status).json({ error: err.message });
      return;
    }

    const { error: insertError } = await supabase
      .from("nagoya-datas")
      .insert([
        { "image-url": imageURL, "photo-date": day, "photo-message": message },
      ]);

    if (insertError) {
      const err = Errors.INSERT_FAIL(insertError.message);
      res.status(err.status).json({ error: err.message });
      return;
    }

    res.status(200).json({ message: "done!" });
  } catch (err: any) {
    console.error("Unknown upload error:", err);
    const error = Errors.UNKNOWN_ERROR(err.message);
    res.status(error.status).json({ error: error.message });
  }
};
