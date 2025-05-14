import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./config/cors";
import apiRouter from "./routes/api";

dotenv.config();

const app: Application = express();

const port = Number(process.env.PORT) || 3000;

app.use(cors(corsOptions));
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`🌐 Allowed origins: ${process.env.CORS_ORIGIN ?? "not set"}`);
});
