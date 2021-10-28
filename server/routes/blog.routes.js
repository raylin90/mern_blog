// import blog controller
const BlogController = require('../controllers/blog.controller')

// create api routes
module.exports = app => {
    // CREATE
    app.post("/api/blog/create", BlogController.createOne);
    // READ ALL
    app.get("/api/blogs", BlogController.findAll);
    // READ ONE
    app.get("/api/blog/:_id", BlogController.findOne);
    // UPDATE
    app.put("/api/blog/update/:_id", BlogController.updateOne);
    // DELETE
    app.get("/api/blog/delete/:_id", BlogController.deleteOne);
}