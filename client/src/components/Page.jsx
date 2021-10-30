import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import { navigate } from '@reach/router';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import dateFormat from 'dateformat';
import AddComment from './AddComment';
import Grid from '@mui/material/Grid';


const Page = props => {

    const { blog } = props;

    const dispatch = useDispatch()
    const { deleteBlog } = bindActionCreators(blogsCreators, dispatch)

    const stickyElement = {
        position: "fixed",
        top: 100,
        right: 20,
    }

    return(
        <Paper elevation={2} sx={{ padding: "20px", minHeight: "100vh"}}>

            <Grid container spacing={2}>

                <Grid item xs={9}>

                    <Typography variant="h3">{blog.title}</Typography>
                    <Typography variant="subtitle2">{dateFormat(blog.createdAt, "mmmm dS, yyyy")}</Typography>
                    <Typography variant="h5" sx={{ fontStyle: "italic" }}>{blog.description}</Typography>
                    <br/>
                    <img src={blog.url} alt="broken img" style={{maxWidth: "50vw"}}/>
                    <Box sx={{ '& button': { m: 0.5 } }}>
                        <Button onClick={()=>navigate(`/blog/update/${blog._id}`)} variant="outlined" color="success" size="small"><EditIcon/></Button>
                        <Button onClick={()=>deleteBlog(`${blog._id}`)} variant="outlined" color="error" size="small"><DeleteForeverIcon/></Button>
                    </Box>
                    <br />
                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blog.sanitizedContent }}></Typography>
                    <br /><br />
                    {
                        blog.comments[0] ? 
                        <>
                        <Typography variant="h5">Comments: </Typography>
                            {
                                blog.comments.map((comment, i) => 
                                <Box key={i} sx={{ backgroundColor: "#efefef", "&:hover": { backgroundColor: "#90a4ae", opacity: [0.9, 0.8, 0.7], }, padding: "5px"}}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        {
                                            comment.name ? <Typography variant="subtitle1">Replied by: {comment.name}</Typography> : "Replied by: Anonymous"
                                        }
                                        <Typography variant="subtitle2"><small>{dateFormat(comment.createdAt, "mm/dd/yyyy")}</small></Typography>
                                    </div>
                                    <Typography variant="body1">{comment.text}</Typography>
                                    <br />
                                </Box>) 
                            }
                        </>
                        : ""
                    }
                </Grid>
                <Grid item xs={3} style={ stickyElement }>
                    <AddComment blogId={ blog._id } refreshPage={ props.refreshPage } setRefreshPage={ props.setRefreshPage }  />
                </Grid>

            </Grid>
        </Paper>
    );
}

export default Page;