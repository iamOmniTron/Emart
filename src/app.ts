import express, { Application, Request, Response, NextFunction } from "express";
import { SERVER_PORT as PORT } from "./config/config";
require("./config/config/_dbinit")();
import cors from "cors";
import * as bodyParser from "body-parser";

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(err.statusCode || 500).json({
      error: err.message,
    });
  }
  next();
});

export default app;
