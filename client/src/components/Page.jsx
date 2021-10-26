import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Page = props => {

    const { blog } = props;

    return(
        <Paper elevation={2} sx={{ padding: "20px", minHeight: "100vh"}}>
            <Typography variant="h3">{blog.title}</Typography>
            <br/>
            <img src={blog.url} alt="broken img" style={{maxWidth: "50vw"}}/>
            <br /><br />
            <Typography variant="body1">{blog.content}</Typography>
        </Paper>
    );
}


export default Page;