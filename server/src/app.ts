import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigin =
  process.env.NODE_ENV === "dev"
    ? process.env.FRONTEND_LOCAL_URL
    : process.env.FRONTEND_PUBLIC_URL;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}\n`);
  console.log(`${allowedOrigin}`);
});
