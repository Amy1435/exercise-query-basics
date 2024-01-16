import express from "express";
const router = express.Router();
import Book from "../models/bookModel.js";

//GET books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find().populate("author", ["name"]);
        res.send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// //GET books/:id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id).populate("author", [
            "name",
            "age",
            "surname",
            "hobbies",
        ]);
        res.send(book);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// POST books
router.post("/", async (req, res) => {
    try {
        const newBook = req.body;
        const book = await Book.create(newBook);
        res.send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PATCH books/:id, PUT non esiste
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndUpdate(id, req.body);
        const bookUpdated = await Book.findById(id);
        res.send(bookUpdated);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// DELETE books/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        res.send(`Book with id ${id} deleted`);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

export default router;
