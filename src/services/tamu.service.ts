import { conn } from "../db/database";
import { Tamu } from "../utils/interfaces";

export const findAllUsers = async () => {
  const [data] = await conn.query("SELECT * FROM Tamu;");

  return data;
};

export const findUserById = async (id: string) => {
  const query: string = "SELECT * FROM Tamu WHERE IDTamu = ?";
  const [data] = await conn.query<Tamu[]>(query, [id]);

  return data[0] ?? null;
};
