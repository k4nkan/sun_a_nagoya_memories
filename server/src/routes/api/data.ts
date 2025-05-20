import { Router } from "express";
import { getAllData } from "../../controllers/dataController";
import { verifyToken } from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, getAllData);

export default router;
