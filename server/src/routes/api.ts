import express from "express";
import multer from "multer";
import { getAllData } from "../controllers/getAllData";
import { uploadData } from "../controllers/uploadData";
import { checkPassword } from "../controllers/authController";
import { verifyToken } from "../controllers/verifyToken";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// テーブルのデータ取得（トークン必須）
router.get("/", verifyToken, getAllData);

// ストレージに画像アップロード（トークン必須）
router.post("/", verifyToken, upload.single("file"), uploadData);

// パスワード認証 (トークン不要)
router.post("/auth", express.json(), checkPassword);

export default router;
