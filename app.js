import express from "express";
import morgan from "morgan";
import bookRouters from "./routes/booksRoutes.js";
import authorsRoutes from "./routes/authorsRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const { MONGO_URI } = process.env;
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/books", bookRouters);
app.use("/authors", authorsRoutes);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`Connesso a Mongo con successo`);
        app.listen(3000, () => {
            console.log("Server listening on Port 3000");
        });
    })
    .catch((err) => {
        console.err(err);
    });
