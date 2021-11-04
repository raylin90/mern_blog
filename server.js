// we need to bring in express framework
const express = require('express');
// bring CORS for cross origin requests
const cors = require("cors");
// we need to create our app that gets everything running (start server, go to routes, do features and functionalities)
const app = express();
// set up our port in a variable
const port = 8000;
// cookie allows us to create, read, work with cookie, which we used for Auth
const cookies = require('cookie-parser');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // AUTH W/ COOKIE // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Cors allows us to connect two localhosts together, the obj allows for Auth
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
// impprt .env file from root
require('dotenv').config();
// allow app to use cookiess
app.use(cookies());



// Establish connection with db
require("./server/config/mongoose.config");
// you MUST have this if you are working with POST requests
app.use(express.json(), express.urlencoded({ extended: true }));
// import all routes
const BlogRoutes = require("./server/routes/blog.routes")(app);
const UserRoutes = require("./server/routes/user.routes")(app);
const CommentRoutes = require("./server/routes/comment.routes")(app);

// we need to start our server
const server = app.listen(port, () => console.log(`Running on port ${port}!!`));



// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // BELOW FOR SOCKET  // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// hookup our server to socket
const io = require("socket.io")(server, {cors: true});
// how socket works?
// step 1: you need to emit a message (emitters: send your data)
// step 2: something has to response when you emit a message (on: trigger, listenning for a particular event, and when that event happends, we perform an action)
// code that listens for the moment someone enter the webpage(onetime event, if you refresh, it will dis-connect)
io.on("connect", socket=> {
    console.log(socket.id)
    // got the input from frontend
    socket.on("chat", inputMsg => {
        console.log("I got the message", inputMsg)
        // show to everyone's screen, passback to frontend
        io.emit("send chat", inputMsg);
    })
})
