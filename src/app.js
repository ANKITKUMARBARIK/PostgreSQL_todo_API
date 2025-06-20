import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { fileSize } from "./constants.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false, limit: fileSize }));
app.use(express.json({ limit: fileSize }));
app.use(express.static("public"));

// routes import
import todoRouter from "./routes/todo.route.js";

// routes define
app.use("/api/v1/todo", todoRouter);

// global error handler - one last middleware
app.use(errorMiddleware);

export default app;
