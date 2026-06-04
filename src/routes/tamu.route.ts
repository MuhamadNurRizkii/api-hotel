import Express from "express";
import {
  createUser,
  deleteUserById,
  editUserById,
  getUserById,
  getUsers,
} from "../controllers/tamu.controller";

const tamu = Express.Router();

// getdatatamu
tamu.get("/tamu", getUsers);
tamu.get("/tamu/:id", getUserById);
tamu.post("/tamu/add", createUser);
tamu.put("/tamu/edit/:id", editUserById);
tamu.delete("/tamu/delete/:id", deleteUserById);

export { tamu };
