import Express from "express";
import { getReservasi } from "../controllers/reservasi.controller";

const reservasi = Express.Router();

// ambil semua data reservasi
reservasi.get("/reservasi", getReservasi);
// create data reservasi

export { reservasi };
