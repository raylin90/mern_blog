const CommentController = require("../controllers/comment.controller");

// create api routes
module.exports = app => {
    // CREATE
    app.put("/api/comments/update/:_id", CommentController.appendComment);
    // DELETE
    app.delete("/api/comment/delete/:_commentId/blog/:_blogId", CommentController.deleteOne);
    // EDIT
    app.post("/api/comment/edit/:_commentId/blog/:_blogId", CommentController.editComment)
}