import dotenv from "dotenv";
import app from "./app.js";
import initDB from "./config/initDB.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
    try {
        await initDB();
        const server = app.listen(process.env.PORT || 8080, () =>
            console.log(`Server started at PORT ${process.env.PORT}`)
        );

        server.on("error", (err) => {
            console.error("Server Error:", err.message);
            process.exit(1);
        });
    } catch (err) {
        console.error("InitDB or PostgreSQL Error:", err.message);
        process.exit(1);
    }
};

startServer();
