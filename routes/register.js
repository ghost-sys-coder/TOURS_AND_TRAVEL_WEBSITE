const express = require('express');
const router = express.Router();

const { getRegister, registerUser} = require("../controllers/registerController")

/** @description register routes */
/** /GET register */
router.get("/", getRegister);

/** /POST register */
router.post("/", registerUser)

module.exports = router;