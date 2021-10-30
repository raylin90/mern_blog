import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from '../states/types'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Navbar = props => {

    const dispatch = useDispatch()
    const { authLogout } = bindActionCreators(authCreators, dispatch)

    // check redux if any user obj in there
    const isUserLogin = useSelector(state => state.auth)
        
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  >
                <Toolbar>
                    <IconButton size="large" edge="start" sx={{ mr: 0.5 }}>
                        <Link href="https://www.linkedin.com/in/raylin90/"><LinkedInIcon fontSize="small" color="action"/></Link>
                    </IconButton>
                    <IconButton size="large" edge="start" sx={{ mr: 0.5 }}>
                    <Link href="https://github.com/raylin90"><GitHubIcon fontSize="small" color="action"/></Link>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}></Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link href="/" underline="hover" color="#424242">HOME</Link></Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link href="/blog/write" underline="hover" color="#424242">WRITE</Link></Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link href="/joinchat" underline="hover" color="#424242">CHAT</Link></Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link href="/about" underline="hover" color="#424242">ABOUT</Link></Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}></Typography>
                    {
                    isUserLogin.state ? 
                    <Button color="inherit"><Link onClick={ authLogout }underline="hover" color="#424242">Lougout</Link></Button>
                    :
                    <>
                    <Button color="inherit"><Link href="/login" underline="hover" color="#424242">Login</Link></Button>
                    <Button color="inherit"><Link href="/register" underline="hover" color="#424242">Register</Link></Button>
                    </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
        { props.children }
        <Typography variant="overline" sx={{ display:"flex",justifyContent:"center" }}>MERN PROJECT WITH MATERIAL-UI </Typography>
        </>
    );
}

export default Navbar;