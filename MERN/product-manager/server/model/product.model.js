const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title must be at least 3 characters"],
            minlength: [3, "Title must be at least 3 characters"],
        },
        price: {
            type: Number,
            required: [true, "Price must be greater than 0"],
            min: [0.01, "Price must be greater than 0"],
        },
        description: {
            type: String,
            required: [true, "Description must be at least 10 characters."],
            minlength: [10, "Description must be at least 10 characters."],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
