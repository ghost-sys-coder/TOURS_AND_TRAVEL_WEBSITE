const bcrypt = require("bcrypt");
const User = require("../models/User");
const HomeBook = require("../models/HomeBookform");
const Contact = require("../models/Contact");

const createToken = require("../helpers/webToken");
const { handleErrors } = require("../helpers/errors");

/** GET Home/Login page */
const homePage = async (req, res) => {
    res.render("index", {
        pageTitle: "Home Page"
    })
}

const postContact = async (req, res) => {
    const { fullName, userEmail, userPhoneNumber, userSubject, userMessage } = req.body;

    try {
        const contactDoc = await Contact({
            fullName,
            userEmail,
            userPhoneNumber,
            userSubject,
            userMessage
        });
        contactDoc.save()
        res.status(200).json(contactDoc)

    } catch (err) {
        res.status(500).json(err);
    }
}

const postHomeBook = async (req, res) => {
    const { destination, guests, arrival, departure } = req.body;

    try {
        const bookDoc = await new HomeBook({
            destination,
            guests,
            arrival,
            departure
        });
        bookDoc.save();
        res.status(200).json(bookDoc);
    } catch (err) {
        res.status(500).json({err})
    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const auth = await bcrypt.compare(password, user.password);

            if (auth) {
                const token = createToken(user._id);
                res.cookie("user_token", token, {
                    maxAge: 1000 * 3 * 24 * 60 * 60,
                    httpOnly: true
                })
                return res.status(200).json({
                    user: user._id,
                    email: user.email,
                    firstName: user.firstName
                })
            }
            else {
                // return res.status(400).json("incorrect password")
                throw Error("incorrect password")
            }
        }
        throw Error("incorrect email")
    
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
    
}

const getLogout = async (req, res) => {
    res.cookie("user_token", "", { maxAge: 1 });
    res.redirect("/")
}

module.exports = {
    homePage,
    postHomeBook,
    postContact,
    postLogin,
    getLogout
}