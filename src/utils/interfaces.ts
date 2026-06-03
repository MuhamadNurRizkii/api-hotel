import { RowDataPacket } from "mysql2";

export interface Params {
  id: string;
}

export interface RequestBodyTamu {
  IDTamu: number;
  NamaTamu: string;
  NoHP: string;
  Email: string;
}

export interface UpdateTamu {
  NamaTamu: string;
  NoHP: string;
  Email: string;
}

export interface Tamu extends RowDataPacket {
  IDTamu: number;
  NamaTamu: string;
  NoHP: string;
  Email: string;
}
