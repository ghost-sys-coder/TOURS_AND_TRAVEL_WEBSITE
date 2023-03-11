const jwt = require("jsonwebtoken");
const User = require("../models/User");

/** check user */
const checkUser = (req, res, next) => {
    const token = req.cookies.user_token;

    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next()
    }
}

/** route protecting */
const requireAuth = (req, res, next) => {
    const token = req.cookies.user_token;

    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, async (err,decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect("/register")
            } else {
                console.log(decodedToken);
                next()
           }
        })
    } else {
        res.redirect("/register");
    }
}

module.exports = {
    checkUser,
    requireAuth
}