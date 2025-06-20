import pool from "../config/db.config.js";

export const getAllTodosService = async () => {
    const result = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    return result.rows;
};

export const getTodoByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result.rows[0];
};

export const createTodoService = async (title, content) => {
    const result = await pool.query(
        "INSERT into todos (title, content) VALUES ($1, $2) RETURNING *",
        [title, content]
    );
    return result.rows[0];
};

export const updateTodoService = async (id, title, content) => {
    const result = await pool.query(
        "UPDATE todos SET title = $1, content = $2 WHERE id = $3 RETURNING *",
        [title, content, id]
    );
    return result.rows[0];
};

export const deleteTodoService = async (id) => {
    const result = await pool.query(
        "DELETE FROM todos where id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};
