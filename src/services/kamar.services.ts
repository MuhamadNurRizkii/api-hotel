import { ResultSetHeader, RowDataPacket } from "mysql2";
import { conn } from "../db/database";
import { RequestBodyKamar, UpdateKamar } from "../utils/interfaces";

export const findAllKamar = async () => {
  const query: string = "SELECT * FROM Kamar";
  const [data] = await conn.query<RowDataPacket[]>(query);

  return data;
};

export const insertKamar = async (datas: RequestBodyKamar) => {
  const query: string = `INSERT INTO Kamar (NoKamar, TipeKamar, HargaPerMalam, Status) VALUES (?,?,?,?)`;
  const [data] = await conn.query<ResultSetHeader>(query, [
    datas.NoKamar,
    datas.TipeKamar,
    datas.HargaPerMalam,
    datas.Status,
  ]);

  return data;
};

export const findKamarByNoKamar = async (NoKamar: number) => {
  const query: string = "SELECT * FROM Kamar WHERE NoKamar = ?";
  const [data] = await conn.query<RowDataPacket[]>(query, [NoKamar]);

  return data;
};

export const findKamarByTipeKamar = async (TipeKamar: string) => {
  const query: string = "SELECT * FROM Kamar WHERE TipeKamar = ?";
  const [data] = await conn.query<RowDataPacket[]>(query, [TipeKamar]);

  return data;
};

export const updateKamar = async (NoKamar: number, datas: UpdateKamar) => {
  const query: string =
    "UPDATE Kamar SET TipeKamar = ?, HargaPerMalam = ?, Status = ? WHERE NoKamar = ?";
  const [data] = await conn.query<ResultSetHeader>(query, [
    datas.TipeKamar,
    datas.HargaPerMalam,
    datas.Status,
    NoKamar,
  ]);

  return data;
};

export const deleteKamar = async (NoKamar: number) => {
  const query: string = "DELETE FROM Kamar WHERE NoKamar = ?";
  const [data] = await conn.query<ResultSetHeader>(query, [NoKamar]);

  return data;
};
