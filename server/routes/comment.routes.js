const CommentController = require("../controllers/comment.controller");

// create api routes
module.exports = app => {
    // // CREATE
    // app.post("/api/comments/create", CommentController.createOne);
    // READ ALL
    app.get("/api/comments", CommentController.findAll);
    // READ ONE
    app.get("/api/comments/:_id", CommentController.findOne);
    // UPDATE
    app.put("/api/comments/update/:_id", CommentController.appendComment);
    // // DELETE
    // app.delete("/api/comments/delete/:_id", CommentController.deleteOne);
}