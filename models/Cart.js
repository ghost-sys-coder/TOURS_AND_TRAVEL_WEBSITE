const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    availableDate: {
        type: Date,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },
    packageTitle: {
        type: String,
        required: true
    },
    packageDescription: {
        type: String,
        required: true
    },
    packageDestination: {
        type: String,
        required: true
    },
    packageImages: {
        type: [String],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;