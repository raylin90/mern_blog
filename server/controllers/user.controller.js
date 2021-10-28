const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import secreat key from .env file
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class UserController {
    register(req, res) {
        // console.log(req.body.email)
        User.findOne({ email: req.body.email })
            .then(user => {
                if(user === null) {
                    // console.log("unique")
                    // create a new user Obj
                    const user = new User(req.body)
                    // save it to db
                    user.save()
                        // after we save the user into our databse
                        .then(() => {
                            res
                                // create a cookie with token(user id and JWT secreat key), limited to http request only
                                .cookie("usertoken", jwt.sign({_id: user._id}, JWT_SECRET_KEY), {httpOnly: true})
                                .json({message: "you have created a new user", user: user})
                        })
                        .catch(err => res.json(err));
                } else {
                    console.log("email in use")
                    res.json( {errors: { email: { message: "Email already in use"}}}) // email is not found
                }
            })

    }

    login(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                // if we didnt found the user
                if(user === null) {
                    res.json({message: "Invalid Login"}) // email is not found
                // if we found a use
                } else {
                    // check password matching or not
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid) {
                                // generate a cookie, named it uesrtoken, sign with JWT
                                res.cookie("usertoken", jwt.sign({_id: user._id}, JWT_SECRET_KEY), {httpOnly: true})
                                    .json({message: "success!"})
                            } else {
                                res.json({message: "Invalid Login"}) // incorrect password
                            }
                        })
                        .catch({message: "something went wrong when comparing pw and conf_pw", err})
                }
            })
            .catch(err => console.log("something went wrong when login a user", err))
    }

    getLoggedInUser(req, res) {
        // decode the usertoken, unsign JWT
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true})
        User.findById(decodedJWT.payload._id)
            .then(user => res.json(user))
            .then(err => console.log("something went wrong when getting login user info"))
    }

    logout(req, res) {
        // console.log(res)
        res.clearCookie("usertoken");
        res.sendStatus(200);
    
    }
}

module.exports = new UserController();