import cors, { CorsOptions } from "cors";

const allowedOrigins = process.env.CORS_ORIGIN;

if (!allowedOrigins) {
  throw new Error("❎ CORS_ORIGIN is not defined in environment variables");
}

const corsOptions: CorsOptions = {
  origin(
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    const isAllowed = !origin || origin === allowedOrigins;

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`❎ Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by Cors"));
    }
  },
};

export default corsOptions;
