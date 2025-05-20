import { Router } from "express";
import multer from "multer";
import { uploadData } from "../../controllers/uploadController";
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", verifyToken, upload.single("file"), uploadData);

export default router;
