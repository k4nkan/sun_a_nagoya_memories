import { Router } from "express";
import authRoutes from "./auth";
import uploadRoutes from "./upload";
import dataRoutes from "./data";

const router = Router();

router.use("/auth", authRoutes);
router.use("/upload", uploadRoutes);
router.use("/data", dataRoutes);

export default router;
