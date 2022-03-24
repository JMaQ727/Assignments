const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author must have a name."],
            minlength: [2, "Author name must have at least 2 characters."],
        },
    },
    { timestamps: true }
);

const Authors = mongoose.model("Authors", AuthorsSchema);
module.exports = Authors;
