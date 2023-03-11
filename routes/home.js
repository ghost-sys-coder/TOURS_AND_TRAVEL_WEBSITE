const express = require("express");
const router = express.Router();




/** import controllers */
const { homePage, postHomeBook,postContact , postLogin, getLogout } = require("../controllers/homeController.js")

router.get("/", homePage)
router.post("/book", postHomeBook)
router.post("/contact", postContact);
router.post('/login', postLogin)
router.get("/logout", getLogout)


module.exports = router;