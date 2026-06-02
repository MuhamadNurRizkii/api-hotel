import { ResultSetHeader } from "mysql2";
import { conn } from "../db/database";
import { RequestBodyTamu, Tamu } from "../utils/interfaces";

export const findAllUsers = async () => {
  const [data] = await conn.query("SELECT * FROM Tamu;");

  return data;
};

export const findUserById = async (id: string) => {
  const query: string = "SELECT * FROM Tamu WHERE IDTamu = ?";
  const [data] = await conn.query<Tamu[]>(query, [id]);

  return data[0] ?? null;
};

export const insertTamu = async (datas: RequestBodyTamu) => {
  const query: string =
    "INSERT INTO Tamu (IDTamu, NamaTamu, NoHP, Email) VALUES (?, ?, ?, ?)";
  const [data] = await conn.query<ResultSetHeader>(query, [
    datas.IDTamu,
    datas.NamaTamu,
    datas.NoHP,
    datas.Email,
  ]);

  return data;
};
