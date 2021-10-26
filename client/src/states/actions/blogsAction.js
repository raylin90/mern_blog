import axios from 'axios';

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
    }

}