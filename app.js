const dotenv = require("dotenv")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const morgan = require("morgan");


/** import middleware */
const { checkUser, requireAuth } = require("./middleware/authMiddleware");

/** get route */
const mainRoute = require("./routes/home");
const registerRoute = require("./routes/register");
const packageRoute = require('./routes/package');
const commentRoute = require("./routes/comment");
const cartRoute = require("./routes/cartRoute");

/** loading configuration file */
dotenv.config({ path: "./config/config.env" });

/** import mongoose connection */
const connectDB = require("./database/db");

mongoose.set('strictQuery', false);

const port = process.env.PORT || 8000;

const app = express();

/** if logging */
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"))
app.use(cors({
    optionsSuccessStatus: true,
    credentials: true,
    origin: "http://localhost:5000"
    // origin: ["https://tours-and-travel-website.herokuapp.com", "http://localhost:5000"]
}))
app.use(cookieParser())
app.use("/uploads", express.static("uploads"))
app.set("view engine", "ejs");



/**
 * ! Routes
 */


app.get("*", checkUser)
app.use("/", mainRoute)
app.use("/register", registerRoute)
app.use("/api/booking", packageRoute)
app.use("/api/comment", commentRoute) //include requireAuth
app.use("/api/cart", cartRoute);






app.listen(port, () => {
    /** the server will only run if there is a database connection */
    connectDB();
    console.log(`The server is running on port: ${port}`)
})