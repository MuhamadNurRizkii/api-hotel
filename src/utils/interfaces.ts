import { RowDataPacket } from "mysql2";

export interface Params {
  id: string;
}

export interface Tamu extends RowDataPacket {
  IDTamu: number;
  NamaTamu: string;
  NoHP: string;
  Email: string;
}
