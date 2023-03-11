const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");
const moment = require("moment");


/**
 * ! CART CONTROLLERS
 */

/** POST CART */
const postCart = async (req, res) => {
    const { user_token } = req.cookies;

    if (user_token) {
        jwt.verify(user_token, process.env.SECRET_TOKEN, async (err, userInfo) => {
            if (err) throw err;

            const { packageTitle, packageDestination, packageDescription, packageImages ,availableDate, totalPrice } = req.body;

            const cartDoc = await Cart({
                packageTitle,
                packageDescription,
                packageDestination,
                packageImages,
                availableDate,
                totalPrice,
                user: userInfo.id,
                userName: userInfo.firstName
            });
            cartDoc.save();
            res.status(200).json(cartDoc);
        })
    }
}


/** GET /get-cart */
const getCart = async (req, res) => {
    const { user_token } = req.cookies;
    

    jwt.verify(user_token, process.env.SECRET_TOKEN, async (err, userInfo) => {
        if (err) throw err;

        const cartProducts = await Cart.find({user: userInfo.id});
        res.render("cart", {
            cartProducts
        })

    })
    
}


module.exports = {
    postCart,
    getCart
}