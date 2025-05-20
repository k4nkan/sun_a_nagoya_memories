import express, { Application } from "express";
import cors from "cors";
import corsOptions from "./config/cors";
import apiRouter from "./routes/api";

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", apiRouter);

export default app;
