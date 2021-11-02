import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

const Page = props => {

    const { blog } = props;
    const dispatch = useDispatch()
    const { deleteBlog } = bindActionCreators(blogsCreators, dispatch)
    const loginUser = useSelector(state => state.auth)
    const stickyElement = {
        position: "fixed",
        top: 100,
        right: 20,
    }

    // delete comment axios call
    const deleteComment = (blogId, commentId) => {
        axios.delete(`http://localhost:8000/api/comment/delete/${commentId}/blog/${blogId}`)
            .then(res => console.log("deleted"))
            .catch(err => console.log("something went wrong when deleting a comment", err))
            // after delete it, it will refresh the page
            props.setRefreshPage(!props.refreshPage)
    }

    const [text, setText] = useState("")
    const [open, setOpen] = useState(false);
    // for dialogue open and close
    const handleClickOpen = e => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // axios call to update comment
    const updateComment = (blogId, commentId) => {
        if(text.length < 10) {
            alert("comment need more than 10")
        } else {
            axios.post(`http://localhost:8000/api/comment/edit/${commentId}/blog/${blogId}`, {text: text})
                .then(res => console.log(res))
                .catch(err => console.log(err))
            // once update is done, it will close the dialogue, and refresh the page
            setOpen(false);
            props.setRefreshPage(!props.refreshPage)
        }
    }

    return(
        <Paper elevation={2} sx={{ padding: "20px", minHeight: "88vh"}}>

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
                    {/* display comment base on whether we have comment or not */}
                    {
                        blog.comments[0] ? 
                        <>
                        <Typography variant="h5">Comments: </Typography>
                            {
                                blog.comments.map((comment, i) => 
                                <Box key={i} sx={{ backgroundColor: "#efefef", padding: "5px"}}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        {
                                            comment.name ? <Typography variant="subtitle1">Replied by: {comment.name}</Typography> : "Replied by: Anonymous"
                                        }
                                        <Typography variant="subtitle2"><small>{dateFormat(comment.createdAt, "mm/dd/yyyy")}</small></Typography>
                                    </div>
                                    <Typography variant="body1">{comment.text}</Typography>
                                    {
                                        loginUser.state ? loginUser.state.email === comment.email ? 
                                        <>
                                        <EditIcon onClick={handleClickOpen} fontSize="small" color="success"/>
                                        {/* dialog if user want to update comment*/}
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description">
                                            <DialogTitle id="alert-dialog-title">Update Comment</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    <input type="text" name="text" onChange={e=>setText(e.target.value)} style={{width: "500px"}}/>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>Cancel</Button>
                                                <Button onClick={()=>updateComment(`${blog._id}`, `${comment._id}`)} autoFocus>Submit</Button>
                                            </DialogActions>
                                        </Dialog>

                                        <HighlightOffIcon onClick={()=>deleteComment(`${blog._id}`, `${comment._id}`)} fontSize="small" color="error" />
                                        </>: "" : ""
                                    }
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