import { Request, Response } from "express";
import { findAllReservasi } from "../services/reservasi.service";

export const getReservasi = async (req: Request, res: Response) => {
  const data = await findAllReservasi();

  try {
    if (data.length === 0) {
      return res
        .status(200)
        .json({ status: "success", message: "Data masih kosong", data: [] });
    }

    return res
      .status(200)
      .json({
        status: "success",
        message: "Data berhasil diambil",
        data: data,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan server" });
  }
};
