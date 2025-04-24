import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PASSWORD = process.env.SITE_PASSWORD;

export const checkPassword = (req: Request, res: Response) => {
  const { password } = req.body;

  if (password === PASSWORD) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ succsess: false, message: "invalid passworf" });
  }
};
