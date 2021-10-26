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
                    type: "GET_ONE_BLOG",
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
                    // console.log("NO ERROR")
                    navigate("/")
                }
            })
            .catch(err => console.log("something went wrong when saving one blog", err))
    }
}

export const deleteBlog = id => {
    return(dispatch) => {
        return axios.delete(`http://localhost:8000/api/blog/delete/${id}`)
            .then(res => {
                console.log("deleted")
                navigate("/")
            })
            .catch(err => console.log("something went wrong when deleting one blog", err))
    }
}

export const updateBlog = (id, blog) => {
    return(dispatch) => {
        return axios.put(`http://localhost:8000/api/blog/update/${id}`, blog)
            .then(res => {
                if(res.data.error) {
                    dispatch({
                        type: "ERRORS",
                        payload: res.data.error.errors
                    })
                } else {
                    navigate(`/blog/${id}`)
                }
            })
            .catch(err => console.log("something went wrong when updating one blog", err))
    }
}