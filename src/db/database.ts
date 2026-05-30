import mysql, { PoolOptions } from "mysql2/promise";

const access: PoolOptions = {
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  host: process.env.HOST_DB,
  database: process.env.DATABASE_DB,
};

export const conn = mysql.createPool(access);
