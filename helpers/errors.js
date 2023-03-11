/** handle errors */
const handleErrors = (err) => {
    console.log(err.message, err.code);

    /** errors object */
    let errors = {
        email: "",
        password: ""
    }

    /** incorrect email */
    if (err.message === "incorrect email") {
        errors.email = "email is not registered"
    }

    /** incorrect password */
    if (err.message === "incorrect password") {
        errors.password = "this password is incorrect"
    }
    
    /** duplicate error code E11000 */
    if (err.code === 11000) {
        errors.email = "that email is already registered...!!";
        // return errors;
    }

    /** validation errors */
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(error => {
            const { properties } = error;
            errors[properties.path] = properties.message;
        })
        // return errors;
    }
    return errors;
}

module.exports = {handleErrors}