import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import { navigate } from '@reach/router';

const Page = props => {

    const { blog } = props;

    const dispatch = useDispatch()
    const { deleteBlog } = bindActionCreators(blogsCreators, dispatch)

    return(
        <Paper elevation={2} sx={{ padding: "20px", minHeight: "100vh"}}>
            <Typography variant="h3">{blog.title}</Typography>
            <br/>
            <img src={blog.url} alt="broken img" style={{maxWidth: "50vw"}}/>

            <Box sx={{ '& button': { m: 0.5 } }}>
                <Button onClick={()=>navigate(`/blog/update/${blog._id}`)} variant="outlined" color="success" size="small">Update</Button>
                <Button onClick={()=>deleteBlog(`${blog._id}`)} variant="outlined" color="error" size="small">Delete</Button>
            </Box>
            <br />
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blog.sanitizedContent }}></Typography>
        </Paper>
    );
}

export default Page;