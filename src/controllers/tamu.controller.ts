import { Request, Response } from "express";
import {
  findAllUsers,
  findUserById,
  insertTamu,
} from "../services/tamu.service";
import { Params } from "../utils/interfaces";
import { Tamu } from "../types/tamu.type";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await findAllUsers();

    if ((data as any[]).length === 0) {
      return res.status(400).json({
        status: "error",
        message: "Data kosong",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Terjadi kesalahan server" });
  }
};

export const getUserById = async (req: Request<Params>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ status: "error", message: "Id tidak ditemukan" });
  }

  try {
    const tamu = await findUserById(id);
    console.log(tamu);
    if (!tamu) {
      return res
        .status(404)
        .json({ status: "error", message: "Data tidak ditemukan", data: {} });
    }
    return res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: tamu,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: `Terjadi kesalahan server` });
  }
};

export const createUser = async (req: Request<Tamu>, res: Response) => {
  const { IDTamu, NamaTamu, NoHP, Email } = req.body;

  if (!IDTamu || !NamaTamu || !NoHP || !Email) {
    return res
      .status(400)
      .json({ status: "error", message: "Semua field wajib diisi!" });
  }
  try {
    const data = await insertTamu({ IDTamu, NamaTamu, NoHP, Email });

    if (data.affectedRows === 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Data gagal ditambahkan!" });
    }

    res
      .status(201)
      .json({ status: "success", message: "Data berhasil ditambahkan" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan server" });
  }
};
