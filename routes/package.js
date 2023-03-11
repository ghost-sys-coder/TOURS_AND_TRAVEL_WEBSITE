const express = require("express");
const router = express.Router();
const { getPackage, getAllPackages } = require("../controllers/packageController");


// @description All packages page
// GET /api/booking/packages

router.get("/packages", getAllPackages)

// @description Package page
//GET /api/booking/:packageName

router.get("/:packageName", getPackage);


module.exports = router;