// Authorization and Middleware, import jwt first
const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res, next) => {
    // check the "usertoken" with the scret key we signing it.
    // (err), if we received error, payload(the information stored in the cookie)
    jwt.verify(req.cookies.usertoken, process.env.JWT_SECRET_KEY, (err, payload) => {
        if(err) {
            console.log("something went wrong during Authorization Middleware verification")
            res.status(401).json({verify: false});
        } else {
            // otherwise we process to next step
            next();
        }
    });
}
