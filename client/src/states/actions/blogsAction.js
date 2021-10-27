import axios from 'axios';
import { navigate } from '@reach/router';
const marked = require('marked')
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window)


// get fetch to get all blogs
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

// get fetch to get one blog
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

// post fetch to save blog
export const saveBlog = blog => {
    return(dispatch) => {
        return axios.post(`http://localhost:8000/api/blog/create`, blog)
            .then(res => {
                if(res.data.error) {
                    console.log("ERRORS")
                    console.log(res.data.error.errors)
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

// delete fetch to delete a blog
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

// put fetch to update a blog
export const updateBlog = (id, blog) => {
    blog.sanitizedContent = dompurify.sanitize(marked(blog.content));
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