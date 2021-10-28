import axios from 'axios';
import { navigate } from '@reach/router';

// process user register
export const authRegister = form => {
    return(dispatch) => {
        return axios.post("http://localhost:8000/api/user/register", form, { withCredentials: true })
            .then(res => {
                console.log(res)
                if(res.data.errors) {
                    dispatch({
                        type: "ERRORS",
                        payload: res.data.errors
                    })
                } else {
                    console.log("user registered")
                    navigate("/login");
                }
            })
            .catch(err => console.log("something went wrong when register an user", err))
    }
}

// process user login
export const authLogin = form => {
    return(dispatch) => {
        return axios.post("http://localhost:8000/api/user/login", form, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                if(res.data.message === "Invalid Login") {
                    dispatch({
                        type: "ERRORS",
                        payload: res.data.message
                    })
                } else {
                    console.log("user logged in")
                    navigate("/");
                }
            })
            .catch(err => console.log("something went wrong when login an user", err))
    }
}

// fetch user login information
export const authUserLoggedIn = () => {
    return(dispatch) => {
        return axios.get("http://localhost:8000/api/user/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: "GET_USER",
                    payload: res.data,
                })
            })
            .catch(err => console.log("something went wrong when getting login user info. ", err))
    }
}

// clear cookie so user can log out
export const authLogout = () => {
    console.log("logout")
    return(dispatch) => {
        return axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => {
                console.log("user logged", res);
                navigate("/login");
                console.log("redirect")
            })
            .catch(err => console.log("something went wrong when logout user", err))
    }
}