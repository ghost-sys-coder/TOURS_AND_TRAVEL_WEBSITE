const Package = require("../models/Package");
const Comment = require("../models/Comment");
const fs = require("fs");
const jwt = require("jsonwebtoken");



const getComments = async (req, res) => {
    
    const comments = await Comment.find({})
        .populate("userInfo", ["firstName", "lastName"]);

    res.status(200).json(comments)
}


const postComment = async (req, res) => {
    const { packageTitle } = req.params;

    /** get file */
    const { path, originalname } = req.file;
    const nameParts = originalname.split(".");
    const nameExtension = nameParts[nameParts.length - 1];
    
    /** create new file path */
    const newPath = path + "." + nameExtension;
    fs.renameSync(path, newPath);

    /** get token to verify user */
    const { user_token } = req.cookies;

    jwt.verify(user_token, process.env.SECRET_TOKEN, async (err, info) => {
        if (err) throw err;


         /** get body data */
        const { review, title, date } = req.body;

        /** save document to database */
        const commentDoc = await Comment.create({
            review,
            title,
            date,
            image: newPath,
            userInfo: info.id
        });
        commentDoc.save();
        res.status(200).json({postComment})
            
        })

}


module.exports = {
    postComment,
    getComments
}