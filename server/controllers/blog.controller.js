// import blog model
const Blog = require('../models/blog.model')

// BASIC CRUD COMMAND

// CREATE
module.exports.createOne = (req, res) => {
    Blog.create(req.body)
        .then(newBlog => res.json(newBlog))
        .catch(err => res.json({message: "something went wrong when creating a blog", error: err}));
}

// RETRIEVE ALL
module.exports.findAll = (req, res) => {
    Blog.find()
        .then(allBlog => res.json(allBlog))
        .catch(err => res.json({message: "something went wrong when finding all blogs", error: err}));
}

// RETRIEVE ONE
module.exports.findOne = (req, res) => {
    Blog.findOne({_id : req.params._id})
        .then(oneBlog => res.json(oneBlog))
        .catch(err => res.json({message: "something went wrong when finding a blog", error: err}));
}

// UPDATE
module.exports.updateOne = (req, res) => {
    Blog.updateOne({_id : req.params._id}, req.body, {runValidators: true})
        .then(updatedBlog => res.json(updatedBlog))
        .catch(err => res.json({message: "something went wrong when updating a blog", error: err}));
}

// DELETE
module.exports.deleteOne = (req, res) => {
    Blog.deleteOne({_id : req.params._id})
        .then(res.json({message: "Blog was sucessfully deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting a blog", error: err}));
}