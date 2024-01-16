import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    author: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Author",
    },

    publishedYear: {
        type: Number,
        required: true,
    },
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
