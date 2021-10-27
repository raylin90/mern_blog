// bring in mongoose
const mongoose = require('mongoose');
// const marked = require('marked')
// const createDomPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// // allow dompurify to create HTML page by using JSDOM window
// const dompurify = createDomPurify(new JSDOM().window)

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
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [10, "Minimun length should be at least 10 characters"]
    },
    // sanitizedContent: {
    //     type: String,
    //     required: true,
    // }
}, {timestamps: true})

// convert the content to marked down HTML
BlogSchema.pre("validate", function(next) {
    if(this.content) {
        this.sanitizedContent = dompurify.sanitize(marked(this.content));
    }
    next();
})

// finalize setting up my model, by create a constructor function for our model and store in variable 'Blog'
const Blog = mongoose.model("Blog", BlogSchema);
// export for other areas of the project
module.exports = Blog;