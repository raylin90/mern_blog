const UserController = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config')
module.exports = app => {

    // register API
    app.post("/api/user/register", UserController.register);
    // login API
    app.post("/api/user/login", UserController.login);
    // get login user API
    app.get("/api/user/getloggedinuser", authenticate, UserController.getLoggedInUser);
    // logout API
    app.get("/api/user/logout", UserController.logout);
}