import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { Env } from "./config/env.config";
import { HTTPSTATUS } from "./config/http.config";
import { error } from "console";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { BadRequestException } from "./utils/app-error";

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException("TThis is a test error");
  res.status(HTTPSTATUS.OK).json({
    message: "Hello Subscribe to the channel",
  });
});

app.use(errorHandler);

app.listen(Env.PORT, () => {
  console.log(`Server is running on port ${Env.PORT} (${Env.NODE_ENV} mode)`);
});
