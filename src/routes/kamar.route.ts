import Express from "express";
import {
  createKamar,
  getAllKamar,
  getKamarByNokamar,
  getKamarByTipeKamar,
} from "../controllers/kamar.controller";

const kamar = Express.Router();

kamar.get("/kamar", getAllKamar);
kamar.get("/kamar/:NoKamar", getKamarByNokamar);
kamar.get("/kamar/tipe/:TipeKamar", getKamarByTipeKamar);
kamar.post("/kamar/add", createKamar);

export { kamar };
