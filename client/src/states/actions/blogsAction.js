import axios from 'axios';
import { navigate } from '@reach/router';

export const getAllBlogs = () => {
    return(dispatch) => {
        return axios.get("http://localhost:8000/api/blogs")
            .then(res => {
                // console.log("return from axios", res.data)
                dispatch({
                    type: "GET_BLOGS",
                    payload: res.data,
                })
            })
            .catch(err => console.log("something went wrong when getting all blogs", err))
    }
}

export const getOneBlog = id => {
    return(dispatch) => {
        return axios.get(`http://localhost:8000/api/blog/${id}`)
            .then(res => {
                // console.log(res.data)
                dispatch({
                    type: "GET_BLOGS",
                    payload: res.data,
                })
            })
            .catch(err => console.log("something went wrong when getting one blog", err))
    }
}

export const saveBlog = blog => {
    return(dispatch) => {
        return axios.post(`http://localhost:8000/api/blog/create`, blog)
            .then(res => {
                if(res.data.error) {
                    // console.log("ERRORS")
                    // console.log(res.data.error.errors)
                    dispatch({
                        type: "ERRORS",
                        payload: res.data.error.errors
                    })
                } else {
                    console.log("NO ERROR")
                    navigate("/")
                }
            })
            .catch(err => console.log("something went wrong when saving one blog", err))
    }
}