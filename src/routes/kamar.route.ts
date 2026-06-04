import Express from "express";
import { createKamar, getAllKamar } from "../controllers/kamar.controller";

const kamar = Express.Router();

kamar.get("/kamar", getAllKamar);
kamar.post("/kamar/add", createKamar);

export { kamar };
