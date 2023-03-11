const express = require("express");
const router = express.Router();

const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" })

const { postComment, getComments } = require("../controllers/commentController");

/** @description comment route */
/** GET comment page */
router.get("/:packageTitle", getComments);

router.post("/:packageTitle", uploadMiddleware.single("file") ,postComment);


module.exports = router;
