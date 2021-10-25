// we need to bring in express framework
const express = require('express');
// bring CORS for cross origin requests
const cors = require("cors");
// we need to create our app that gets everything running (start server, go to routes, do features and functionalities)
const app = express();
// set up our port in a variable
const port = 8000;

// Cors allows us to connect two localhosts together
app.use(cors());

// Establish connection with db
require("./server/config/mongoose.config")

// you MUST have this if you are working with POST requests
app.use(express.json(), express.urlencoded({ extended: true }))

// import all routes
const AllMyRoutes = require("./server/routes/blog.routes")(app);

// we need to start our server
app.listen(port, () => console.log(`Running on port ${port}!!`))