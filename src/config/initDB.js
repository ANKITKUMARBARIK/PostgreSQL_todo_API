import pool from "./db.config.js";

const initDB = async () => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS todos (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                content TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await pool.query(query);
        console.log("'todos' table created successfully (if not exists)");
    } catch (err) {
        console.error("Error creating 'todos' table:", err.message);
    }
};

export default initDB;
