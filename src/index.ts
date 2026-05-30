import "dotenv/config";
import Express, { Request, Response } from "express";
import createError from "http-errors";
import morgan from "morgan";
import { conn } from "./db/database";
import { kamar } from "./routes/kamar.route";

const app = Express();
const port = process.env.PORT_SERVER;

app.use(Express.json());
app.use(morgan("dev"));

// routing
app.use("/api", kamar);

// handle error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at localhost:${port}`);
});
