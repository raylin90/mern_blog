import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import BookSharpIcon from '@mui/icons-material/BookSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Navbar = props => {
    return(
        <Box
        sx={{
            backgroundColor: '#e0f2f1',
            display: 'flex',
            height: '60px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            typography: 'subtitle1',
            '& > :not(style) + :not(style)': {
            ml: 2,
            },
        }}>

        <Grid container>

            <Grid item xs={1}/>

            <Grid item xs={2}>
                <Link href="https://github.com/raylin90"><GitHubIcon fontSize="small"/></Link>&nbsp;
                <Link href="https://www.linkedin.com/in/raylin90/"><LinkedInIcon fontSize="small"/></Link>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/home" underline="hover" color="#616161">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href="/blog/write" underline="hover" color="#616161">WRITE</Link>&nbsp;&nbsp;&nbsp;
                <Link href="/chat" underline="hover" color="#616161">CHAT</Link>&nbsp;&nbsp;&nbsp;
                <Link href="/contact" underline="hover" color="#616161">CONTACT</Link>
            </Grid>

            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href="/login" underline="hover" color="#616161">Login</Link>&nbsp;&nbsp;
                <Link href="/register" underline="hover" color="#616161">Register</Link>
            </Grid>

            <Grid item xs={1}/>
        </Grid>

        </Box>
    );
}

export default Navbar;