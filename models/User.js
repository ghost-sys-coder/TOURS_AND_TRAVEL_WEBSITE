const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please, provide your first name" ],
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: [true, "Please, provide your last name" ],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Provide a valid email..."]
    },
    password: {
        type: String,
        require: [true, "Please enter your password"],
        minLength: 8,
        trim: true,
        minlength: [6, "Password should be longer than 6 characters..."]
    }
});

/** fire a mongoose hook before the document is saved to the database */
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

/** fire a mongoose hook after the document is saved to the database */
UserSchema.post("save", (doc, next) => {
    console.log("new user created:", doc)
    next()
})

/** mongoose method to log in user */
UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user
        }
        // throw Error("incorrect password")
    }
    // throw Error("Incorrect email")
}

const User = new mongoose.model("User", UserSchema);

module.exports = User;
