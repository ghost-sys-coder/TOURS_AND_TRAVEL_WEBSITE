const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPhoneNumber: {
        type: String,
        required: true,
    },
    userSubject: {
        type: String
    },
    userMessage: {
        type: String
    }
})


const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;