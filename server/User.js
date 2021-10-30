const users = [];

// addUser: This function will be called whenever a connection is made or a new user joined and the user name is stored in the array of that room and if the username is already taken by any of the users inside that room the user will not get entry to chat.
const addUser = ({id, name, room}) => {

    const existingUser = users.find((user) => {
        user.room === room && user.name === name
    });

    if(existingUser) {
        return{error: "Username is taken"};
    }
    const user = {id,name,room};

    users.push(user);
    return {user};
}
// removeUser: This function will be called whenever a connection is destroyed or a user leaves and the user name is deleted from the array of that room.
const removeUser = (id) => {
    const index = users.findIndex((user) => {
        user.id === id
    });

    if(index !== -1) {
        return users.splice(index,1)[0];
    }
}

// getUser: This function takes id as a parameter and returns the username by finding it from the array.
const getUser = (id) => users.find((user) => user.id === id);

// getUsersInRoom: This function will return the name of all the users in the room to display in chat.
const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = {addUser, removeUser, getUser, getUsersInRoom};