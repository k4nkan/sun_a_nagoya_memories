import express from "express";
import multer from "multer";
import { getAllData } from "../controllers/getAllData";
import { uploadData } from "../controllers/uploadData";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getAllData);
router.post("/", upload.single("file"), uploadData);

export default router;
