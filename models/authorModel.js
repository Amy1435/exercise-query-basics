import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const addressSchema = new Schema({
    address_Line_1: {
        type: String,
    },
    number: {
        type: Number,
    },
    city: {
        type: String,
        maxLength: 15,
        required: true,
    },
});

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    hobbies: {
        type: [String],
        required: true,
        minLength: 2,
    },
});

const authorModel = new model("Author", authorSchema);

export default authorModel;
