// bring in mongoose
const mongoose = require('mongoose');
// const marked = require('marked')
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
// import marked for marked language
const marked = require('marked')
// allow dompurify to create HTML page by using JSDOM window
const dompurify = createDomPurify(new JSDOM().window)
const Comment = require('./comment.model');

// this is where we make our model
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    url: {
        type: String,
        required: [true, "URL is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Minimun length should be at least 10 characters"],
        maxlength: [100, "Maximum length should be 100 characters"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [10, "Minimun length should be at least 10 characters"]
    },
    sanitizedContent: {
        type: String,
        required: true,
    },
    // subdoc into the BlogSchema
    comments: [Comment.schema],
}, { timestamps: true })

// convert the content to marked down HTML
BlogSchema.pre("validate", function(next) {
    console.log("hello")
    if(this.content) {
        console.log(this.content)
        this.sanitizedContent = dompurify.sanitize(marked(this.content));
    }
    next();
})

// finalize setting up my model, by create a constructor function for our model and store in variable 'Blog'
const Blog = mongoose.model("Blog", BlogSchema);
// export for other areas of the project
module.exports = Blog;