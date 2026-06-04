import { RowDataPacket } from "mysql2";
import { conn } from "../db/database";

export const findAllKamar = async () => {
  const query: string = "SELECT * FROM Kamar";
  const [data] = await conn.query<RowDataPacket[]>(query);

  return data;
};
