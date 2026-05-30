import "dotenv/config";
import Express, { Request, Response } from "express";
import createError from "http-errors";
import morgan from "morgan";
import { conn } from "./db/database";

const app = Express();
const port = process.env.PORT_SERVER;

app.use(Express.json());
app.use(morgan("dev"));

app.get("/", async (req: Request, res: Response) => {
  const [data] = await conn.query("SELECT * FROM Tamu");

  res.json(data);
});

// handle error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at localhost:${port}`);
});
