import { Request, Response } from "express";
import { findAllKamar, insertKamar } from "../services/kamar.services";
import { RequestBodyKamar } from "../utils/interfaces";

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

export const createKamar = async (
  req: Request<RequestBodyKamar>,
  res: Response,
) => {
  const { NoKamar, TipeKamar, HargaPerMalam, Status } = req.body;

  if (!NoKamar || !TipeKamar || !HargaPerMalam || !Status) {
    return res
      .status(400)
      .json({ status: "errror", message: "Semua field wajib diisi" });
  }

  try {
    const data = await insertKamar({
      NoKamar,
      TipeKamar,
      HargaPerMalam,
      Status,
    });

    if (data.affectedRows === 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Gagal menambahkan data baru" });
    }

    return res
      .status(201)
      .json({ status: "success", message: "Berhasil menambahkan data baru" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};
