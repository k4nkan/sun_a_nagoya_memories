import { Request, Response } from "express";
import sharp from "sharp";
import { supabase } from "../supabase/client";
import { v4 as uuid } from "uuid";

export const uploadData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const file = req.file;
  const day = req.body.day;

  if (!file || !day) {
    res.status(400).json({ error: "no file or day" });
    return;
  }

  try {
    const webpBuffer = await sharp(file.buffer).webp().toBuffer();
    const fileName = `${uuid()}.webp`;
    const { data: storageData, error: storageError } = await supabase.storage
      .from("nagoya-photos")
      .upload(fileName, webpBuffer, {
        contentType: "image/webp",
      });
    if (storageError) {
      res.status(500).json({ error: storageError.message });
      return;
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message || "unknown error" });
    return;
  }
};
