import { Request, Response } from "express";
import { findAllKamar } from "../services/kamar.services";

export const getAllKamar = async (req: Request, res: Response) => {
  try {
    const data = await findAllKamar();

    if (data.length === 0) {
      return res
        .status(200)
        .json({ status: "success", message: "Data masih kosong", data: [] });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Data berhasil diambil", data });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan server" });
  }
};
