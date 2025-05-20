import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Errors } from "../utils/errors";

dotenv.config();

const PASSWORD = process.env.SITE_PASSWORD as string;
const JWT_SECRET = process.env.JWT_SECRET as string;

export const checkPassword = (req: Request, res: Response) => {
  const { password } = req.body;

  // パスワード一致時にトークンを発行
  if (password === PASSWORD) {
    const token = jwt.sign({ authed: true }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ succsess: true, token });
  } else {
    res
      .status(Errors.INVALID_PASSWORD.status)
      .json({ errors: Errors.INVALID_PASSWORD.message });
  }
};
