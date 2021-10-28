const Comment = require("../models/comment.model");
const Blog = require("../models/blog.model");

// BASIC CRUD COMMAND

// // CREATE
// module.exports.createOne = (req, res) => {
//     Comment.create(req.body)
//         .then(newComment => res.json(newComment))
//         .catch(err => res.json({message: "something went wrong when creating a new comment", error: err}));
// }

// RETRIEVE ALL
module.exports.findAll = (req, res) => {
    Comment.find()
        .then(allComment => res.json(allComment))
        .catch(err => res.json({message: "something went wrong when finding all comments", error: err}));
}

// RETRIEVE ONE
module.exports.findOne = (req, res) => {
    Comment.findOne({_id : req.params._id})
        .then(oneComment => res.json(oneComment))
        .catch(err => res.json({message: "something went wrong when finding one comment", error: err}));
}

// UPDATE
module.exports.appendComment = (req, res) => {
    Blog.findOneAndUpdate( {_id : req.params._id}, { $push: { comments: req.body} }, {useFindAndModify: false})
        .then(oneBlog => res.json(oneBlog))
        .catch(err => res.json({message: "something went wrong when finding one blog", error: err}));
}

// // DELETE
// module.exports.deleteOne = (req, res) => {
//     Comment.deleteOne({_id : req.params._id})
//         .then(res.json({message: "comment was sucessfully deleted"}))
//         .catch(err => res.json({message: "something went wrong when deleting one Comment", error: err}));
// }