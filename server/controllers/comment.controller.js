const Comment = require("../models/comment.model");
const Blog = require("../models/blog.model");

// BASIC CRUD COMMAND

// ADD COMMENT TO A BLOG
module.exports.appendComment = (req, res) => {
    Blog.findOneAndUpdate( {_id : req.params._id}, { $push: { comments: req.body} }, {runValidators: true})
        .then(oneBlog => res.json(oneBlog))
        .catch(err => res.json({message: "something went wrong when adding a Comment", error: err}));
}

// DELETE
module.exports.deleteOne = (req, res) => {
    Blog.findOneAndUpdate({_id: req.params._blogId}, { $pull: { "comments": { _id: req.params._commentId } } })
        .then(res.json({message: "comment was sucessfully deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting one Comment", error: err}));
}

// EDIT COMMENT ARRAY
module.exports.editComment = (req, res) => {
    console.log(req.params._blogId)
    console.log(req.params._commentId)
    console.log(req.body)
    // Blog.findOneAndUpdate({_id: req.params._blogId}, { $set: { "comments": { _id: req.params._commentId } } }, {runValidators: true})
    //     .then(res.json({message: "comment has sucessfully updated"}))
        // .catch(err => res.json({message: "something went wrong when updating one Comment", error: err}));
    Blog.findOneAndUpdate({ "comments._id": req.params._commentId}, { $set: { "comments.$.text": req.body.text}}, {runValidators: true})
        .then(res => console.log(res))
        .catch(err => res.json({message: "something went wrong when updating one Comment", error: err}));
}