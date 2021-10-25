import axios from 'axios';

export const getAllBlogs = () => {
    console.log("in the funciton action")
    return(dispatch) => {
        return axios.get("http://localhost:8000/api/blogs")
            .then(res => console.log(res))
    }

}