const Comment = require("../models/comment.model");
const Blog = require("../models/blog.model");

// BASIC CRUD COMMAND

// ADD COMMENT TO A BLOG
module.exports.appendComment = (req, res) => {
    Blog.findOneAndUpdate( {_id : req.params._id}, { $push: { comments: req.body} }, {runValidators: true})
        .then(oneBlog => res.json(oneBlog))
        .catch(err => res.json({message: "something went wrong when finding one blog", error: err}));
}

// DELETE
module.exports.deleteOne = (req, res) => {
    Blog.findOneAndUpdate({_id: req.params._blogId}, { $pull: { "comments": { _id: req.params._commentId } } })
        .then(res.json({message: "comment was sucessfully deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting one Comment", error: err}));
}
