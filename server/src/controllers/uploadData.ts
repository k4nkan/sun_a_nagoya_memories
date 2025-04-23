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
    // webp 変換
    const webpBuffer = await sharp(file.buffer).webp().toBuffer();
    const fileName = `${uuid()}.webp`;

    // storage にアップロード
    const { data: storageData, error: storageError } = await supabase.storage
      .from("nagoya-photos")
      .upload(fileName, webpBuffer, {
        contentType: "image/webp",
      });

    if (storageError) {
      res.status(500).json({ error: storageError.message });
      return;
    }

    // storage から url を取得
    const { data: publicURLData } = supabase.storage
      .from("nagoya-photos")
      .getPublicUrl(storageData.path);

    const imageURL = publicURLData?.publicUrl;
    if (!imageURL) {
      res.status(500).json({ error: "failed to get public URL" });
      return;
    }

    // 習得した url を table に保存
    const { error: insertError } = await supabase
      .from("nagoya-datas")
      .insert([{ "image-url": imageURL, "photo-date": day }]);

    if (insertError) {
      res.status(500).json({ error: insertError.message });
      return;
    }
    res.status(200).json({ message: "done!" });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "unknown error" });
    return;
  }
};
