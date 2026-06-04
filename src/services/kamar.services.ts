import { ResultSetHeader, RowDataPacket } from "mysql2";
import { conn } from "../db/database";
import { RequestBodyKamar } from "../utils/interfaces";

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
  const query = "SELECT * FROM Kamar WHERE NoKamar = ?";
  const [data] = await conn.query<RowDataPacket[]>(query, [NoKamar]);

  return data;
};
