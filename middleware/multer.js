const multer = require("multer");

/**set storage for images */
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "uploads")
    },

    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf("."));

        cb(null, file.fieldname + "-" + Date.now() + ext);
    }
});


const store = multer({ storage: storage });

// module.exports = store;