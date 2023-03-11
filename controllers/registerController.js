const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { handleErrors } = require("../helpers/errors");
const createToken = require("../helpers/webToken");
/** register route controllers */

/** GET register  */
const getRegister = (req, res) => {
    res.render("signup", {
        pageTitle: "Sign-up Page"
    })
}

/** POST register */
const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        });
        const token = createToken(newUser._id);
        res.cookie("user_token", token, {
            httpOnly: true,
            maxAge: 1000 * 3 * 24 * 60 * 60
        })
        res.status(201).json({
            newUser: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        })
    } catch (err) {
       const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

module.exports = {
    getRegister,
    registerUser
}