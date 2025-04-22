import { supabase } from "../supabase/client";
import { Request, Response } from "express";

export const getAllData = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const { data, error } = await supabase.from("nagoya-datas").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.json(data);
};
