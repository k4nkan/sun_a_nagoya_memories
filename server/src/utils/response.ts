import { Response } from "express";

export const sendErrorReponse = (
  res: Response,
  error: { code: number; message: string; details: string }
) => {
  res.status(error.code).json({
    success: false,
    error: {
      code: error.code,
      message: error.message,
      details: error.details,
    },
  });
};
