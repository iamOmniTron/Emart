import express, { Application, Request, Response, NextFunction } from "express";
import { SERVER_PORT as PORT } from "./config/config";
import cors from "cors"

const app: Application = express();
app.use(cors());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(400).json({
      error: "internal server error",
    });
  }
  next();
});

export default app;