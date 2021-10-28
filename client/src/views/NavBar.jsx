import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Navbar = props => {

    const logout = () => {
        console.log("logout")
        axios.get("http://localhost:8000/api/user/logout", { withCredentials: true })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return(
        <>
        <Box
        sx={{
            backgroundColor: "#e0f2f1",
            display: "flex",
            height: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            typography: "subtitle1",
            "& > :not(style) + :not(style)": {
            ml: 2,
            },
        }}>

        <Grid container>

            <Grid item xs={1}/>

            <Grid item xs={2}>
                <Link href="https://github.com/raylin90"><GitHubIcon fontSize="small"/></Link>&nbsp;
                <Link href="https://www.linkedin.com/in/raylin90/"><LinkedInIcon fontSize="small"/></Link>
            </Grid>

            <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Link href="/" underline="hover" color="#616161">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href="/blog/write" underline="hover" color="#616161">WRITE</Link>&nbsp;&nbsp;&nbsp;
                <Link href="/chat" underline="hover" color="#616161">CHAT</Link>&nbsp;&nbsp;&nbsp;
                <Link href="/contact" underline="hover" color="#616161">CONTACT</Link>
            </Grid>

            <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="/login" underline="hover" color="#616161">Login</Link>&nbsp;&nbsp;
                <Link href="/register" underline="hover" color="#616161">Register</Link>
                <button onClick={ logout}>Lougout</button>
                <Link href="#" onClick={logout}underline="hover" color="#616161">Lougout</Link>
            </Grid>

            <Grid item xs={1}/>
        </Grid>

        </Box>
        { props.children }
        <Typography variant="overline" sx={{ display:"flex",justifyContent:"center" }}>MERN PROJECT WITH MATERIAL-UI </Typography>
        </>
    );
}

export default Navbar;