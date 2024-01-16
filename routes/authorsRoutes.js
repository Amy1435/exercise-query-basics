import express from "express";
const router = express.Router();
import Author from "../models/authorModel.js";

//GET authors
router.get("/", async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// //GET authors/:id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        res.send(author);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// POST authors
router.post("/", async (req, res) => {
    try {
        const newAuthor = req.body;
        const author = await Author.create(newAuthor);
        res.send(author);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//PATCH authors/:id, PUT non esiste
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Author.findByIdAndUpdate(id, req.body);
        const authorUpdated = await Author.findById(id);
        res.send(authorUpdated);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// DELETE authors/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findByIdAndDelete(id);
        res.send(`Author with id ${id} deleted`);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

export default router;
