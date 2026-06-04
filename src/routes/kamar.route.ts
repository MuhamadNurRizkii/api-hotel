import Express from "express";
import {
  createKamar,
  getAllKamar,
  getKamarByNokamar,
} from "../controllers/kamar.controller";

const kamar = Express.Router();

kamar.get("/kamar", getAllKamar);
kamar.get("/kamar/:NoKamar", getKamarByNokamar);
kamar.post("/kamar/add", createKamar);

export { kamar };
