import { RowDataPacket } from "mysql2";
import { conn } from "../db/database";

export const findAllReservasi = async () => {
  const query: string = "SELECT * FROM ViewReservasiHotel";
  const [data] = await conn.query<RowDataPacket[]>(query);

  return data;
};
