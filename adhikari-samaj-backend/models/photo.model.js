const mongoose = require("mongoose");

const Photo = mongoose.model(
    "Photo",
    new mongoose.Schema({
        photoPath: String,
    })
);

module.exports = Photo;