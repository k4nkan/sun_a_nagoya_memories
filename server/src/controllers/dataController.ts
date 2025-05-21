import { supabase } from "../supabase/client";
import { Request, Response } from "express";
import { Errors } from "../utils/errors";
import { sendErrorReponse } from "../utils/response";

export const getAllData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const day = req.query.day as string;

  if (!day) {
    sendErrorReponse(res, Errors.MISSING_DAY);
    return;
  }

  // storage から データを取得
  const { data, error } = await supabase
    .from("nagoya-datas")
    .select("*")
    .eq("photo-date", day);

  if (error) {
    sendErrorReponse(res, Errors.STORAGE_GET_FAIL);
    return;
  }

  res.json(data);
};
