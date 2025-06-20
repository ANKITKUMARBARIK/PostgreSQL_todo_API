import { Pool } from "pg";
import { DB_NAME } from "../constants.js";

const isProd = process.env.NODE_ENV === "production";

const pool = new Pool({
    connectionString: `${process.env.DATABASE_URL}/${DB_NAME}`,
    ssl: isProd ? { rejectUnauthorized: false } : false,
});

export default pool;
