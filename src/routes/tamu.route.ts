import Express from "express";
import { getUserById, getUsers } from "../controllers/tamu.controller";

const tamu = Express.Router();

// getdatatamu
tamu.get("/tamu", getUsers);
tamu.get("/tamu/:id", getUserById);

export { tamu };
