const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    imgUrl: String,
    destination: String,
    price: Number,
    ratings: Array,
    description: String,
    age: String,
    duration: String,
    imgUrls: Array
});


const Package = new mongoose.model("Package", PackageSchema);

module.exports = Package;