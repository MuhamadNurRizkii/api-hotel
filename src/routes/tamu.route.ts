import Express from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/tamu.controller";

const tamu = Express.Router();

// getdatatamu
tamu.get("/tamu", getUsers);
tamu.get("/tamu/:id", getUserById);
tamu.post("/tamu/add", createUser);

export { tamu };
