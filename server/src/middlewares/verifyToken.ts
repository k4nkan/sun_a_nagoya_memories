import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendErrorReponse } from "../utils/response";
import { Errors } from "../utils/errors";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    sendErrorReponse(res, Errors.MISSING_TOKEN);
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    // トークンの検証
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    sendErrorReponse(res, Errors.INVALID_TOKEN);
    return;
  }
};
