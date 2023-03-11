const jwt = require("jsonwebtoken");

/** create user webtoken */
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: maxAge
    })
}

module.exports = createToken;