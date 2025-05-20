import { supabase } from "../supabase/client";
import { Request, Response } from "express";
import { Errors } from "../utils/errors";
import { json } from "stream/consumers";

export const getAllData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const day = req.query.day as string;

  if (!day) {
    res.status(Errors.MISSING_DAY.status).json(Errors.MISSING_DAY.message);
    return;
  }

  // storage から データを取得
  const { data, error } = await supabase
    .from("nagoya-datas")
    .select("*")
    .eq("photo-date", day);

  if (error) {
    res
      .status(Errors.STORAGE_GET_FAIL.status)
      .json(Errors.STORAGE_GET_FAIL.message);
    return;
  }

  res.json(data);
};
