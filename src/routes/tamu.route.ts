import Express, { Request, Response } from "express";
import { conn } from "../db/database";

const tamu = Express.Router();

// getdatatamu
tamu.get("/tamu", async (req: Request, res: Response) => {});

export { tamu };
