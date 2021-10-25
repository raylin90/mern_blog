// bring in mongoose
const mongoose = require('mongoose');

// connect to our database
mongoose.connect("mongodb://localhost/blog_project", {
    // useNewUrlParser and useUnifiedTopology are options we pass in get rid of deprecation messages in our terminal.
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("I have found the mongoose!!"))
    .catch(err => console.log("Oh no! I lost the mongoose!", err))