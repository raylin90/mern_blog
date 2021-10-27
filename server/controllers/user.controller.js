const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import secreat key from .env file
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class UserController {
    register(req, res) {
        // create a new user Obj
        const user = new User(req.body)
        // save it to db
        user.save()
            .then(() => {
                res
                    // create a cookie with utoken(user id and JWT secreat key), limited to http request only
                    .cookie("usertoken", jwt.sign({_id: user._id}, JWT_SECRET_KEY), {httpOnly: true})
                    .json({message: "you have created a new user", user: user})
            })
            .catch(err => res.json(err));
    }

    login(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if(user === null) {
                    res.json({message: "Invalid Login"})
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid) {
                                res.cookie("usertoken", jwt.sign({_id: user._id}, JWT_SECRET_KEY), {httpOnly: true})
                                    .json({message: "seccess!"})
                            } else {
                                res.json({message: "Invalid Login"})
                            }
                        })
                        .catch({message: "something went wrong when comparing pw and conf_pw", err})
                }
            })
            .catch(err => console.log("something went wrong when login a user", err))
    }

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookie.usertoken, {complete: true})
        User.findById(decodedJWT.payload._id)
            .then(user => res.json(user))
            .then(err => console.log("something went wrong when getting login user info", err))
    }
}

module.exports = new UserController();