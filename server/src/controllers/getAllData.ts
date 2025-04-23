import { supabase } from "../supabase/client";
import { Request, Response } from "express";

export const getAllData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const day = req.query.day as string;

  if (!day) {
    res.status(400).json({ error: "can't found day qury" });
    return;
  }

  // storage から データを取得
  const { data, error } = await supabase
    .from("nagoya-datas")
    .select("*")
    .eq("photo-date", day);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (!data || data.length === 0) {
    res.json({ massage: "none" });
  }

  res.json(data);
};
