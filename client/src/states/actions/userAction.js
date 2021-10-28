import axios from 'axios';
import { navigate } from '@reach/router';

export const getLoginUser = () => {
    return(dispatch) => {
        axios.get("http://localhost:8000/api/user/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log("something went wrong when getting login user info. ", err))
    }
}