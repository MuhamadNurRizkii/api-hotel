import { Request, Response } from "express";
import {
  deleteKamar,
  findAllKamar,
  findKamarByNoKamar,
  findKamarByTipeKamar,
  insertKamar,
  updateKamar,
} from "../services/kamar.services";
import { Params, RequestBodyKamar } from "../utils/interfaces";

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

export const getKamarByNokamar = async (
  req: Request<Params>,
  res: Response,
) => {
  const { NoKamar } = req.params;

  if (!NoKamar) {
    return res
      .status(400)
      .json({ status: "error", message: "Kamar tidak ditemukan!" });
  }

  try {
    const [data] = await findKamarByNoKamar(NoKamar);

    if (!data || (data as any[]).length === 0) {
      return res.status(200).json({
        status: "success",
        message: "Kamar tidak ditemukan",
        data: {},
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan error" });
  }
};

export const getKamarByTipeKamar = async (
  req: Request<Params>,
  res: Response,
) => {
  const { TipeKamar } = req.params;

  if (!TipeKamar) {
    return res
      .status(400)
      .json({ status: "error", message: "Kamar tidak ditemukan!" });
  }

  try {
    const [data] = await findKamarByTipeKamar(TipeKamar);

    if (!data || (data as any[]).length === 0) {
      return res.status(200).json({
        status: "success",
        message: "Kamar tidak ditemukan",
        data: {},
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan error" });
  }
};

export const editKamarById = async (req: Request<Params>, res: Response) => {
  const { NoKamar } = req.params;
  const { TipeKamar, HargaPerMalam, Status } = req.body;

  if (!NoKamar) {
    return res
      .status(400)
      .json({ status: "error", message: "NoKamar tidak ditemukan" });
  }

  if (!TipeKamar || !HargaPerMalam || !Status) {
    return res
      .status(400)
      .json({ status: "error", message: "Semua field wajib diisi" });
  }

  try {
    const data = await updateKamar(NoKamar, {
      TipeKamar,
      HargaPerMalam,
      Status,
    });

    if (data.affectedRows === 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Gagal mengupdate data" });
    }

    return res
      .status(201)
      .json({ status: "success", message: "Berhasil mengupdate data" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Terjadi kesalahan server" });
  }
};

export const deleteKamarById = async (req: Request<Params>, res: Response) => {
  const { NoKamar } = req.params;

  if (!NoKamar) {
    return res
      .status(400)
      .json({ status: "error", message: "NoKamar tidak ditemukan" });
  }

  try {
    const data = await deleteKamar(NoKamar);

    if (data.affectedRows === 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Gagal menghapus data" });
    }

    return res
      .status(201)
      .json({ status: "success", message: "Berhasil menghapus data" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Terjadi kesalahan server" });
  }
};
