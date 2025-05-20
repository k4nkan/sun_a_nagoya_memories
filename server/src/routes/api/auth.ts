import { Router, json } from "express";
import { checkPassword } from "../../controllers/authController";

const router = Router();

router.post("/", json(), checkPassword);

export default router;
