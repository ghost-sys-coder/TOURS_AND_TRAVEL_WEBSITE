const mongoose = require("mongoose");


const homeBookSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        requred: true
    },
    arrival: {
        type: Date,
        required: true
    },
    departure: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


const HomeBook = new mongoose.model("HomeBook", homeBookSchema)


module.exports = HomeBook;