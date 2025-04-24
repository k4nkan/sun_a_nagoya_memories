import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "ssss",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
