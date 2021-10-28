import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';

const Marked = props => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    }));

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    return(
        <>
        <Dialog open={ open } aria-describedby="alert-dialog-slide-description" fullScreen>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">Marked Demo</Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}><CloseIcon /></Button>
                </Toolbar>
            </AppBar>
            <br />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography variant="body2" color="initial">Marked - Markdown Parser</Typography>
                            <Typography variant="body2" color="initial">=====================</Typography>
                            <br />
                            <Typography variant="body2" color="initial">[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.</Typography>
                            <br />
                            <Typography variant="body2" color="initial">How To Use The Demo</Typography>
                            <Typography variant="body2" color="initial">------------------------------</Typography>
                            <br />
                            <Typography variant="body2" color="initial">1. Type in stuff on the left.</Typography>
                            <Typography variant="body2" color="initial">2. See the live updates on the right.</Typography>
                            <br />
                            <Typography variant="body2" color="initial">That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:</Typography>
                            <br />
                            <Typography variant="body2" color="initial">- **Preview:**  A live display of the generated HTML as it would render in a browser.</Typography>
                            <Typography variant="body2" color="initial">- **HTML Source:**  The generated HTML before your browser makes it pretty.</Typography>
                            <Typography variant="body2" color="initial">- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.</Typography>
                            <Typography variant="body2" color="initial">- **Quick Reference:**  A brief run-down of how to format things using markdown.</Typography>
                            <br />
                            <Typography variant="body2" color="initial">Why Markdown?</Typography>
                            <Typography variant="body2" color="initial">----------------------</Typography>
                            <Typography variant="body2" color="initial">It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,</Typography>
                            <br />
                            <Typography variant="body2" color="initial">{">"} The overriding design goal for Markdown's formatting syntax is to make it as readable</Typography>
                            <Typography variant="body2" color="initial">{">"} as possible. The idea is that a Markdown-formatted document should be</Typography>
                            <Typography variant="body2" color="initial">{">"} publishable as-is, as plain text, without looking like it's been marked up with tags</Typography>
                            <Typography variant="body2" color="initial">{">"} or formatting instructions.</Typography>
                            <br />
                            <Typography variant="body2" color="initial">Ready to start writing?</Typography>
                            <Typography variant="body2" color="initial">[Marked]: https://github.com/markedjs/marked/</Typography>
                            <Typography variant="body2" color="initial">[Marked]: [Markdown]: http://daringfireball.net/projects/markdown/</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h1>Marked - Markdown Parse</h1>
                            <p><a href="https://github.com/markedjs/marked/">Marked</a> lets you convert <a href="http://daringfireball.net/projects/markdown/">Markdown</a> into HTML. Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML. This demo page will let you type anything you like and see how it gets converted. Live. No more waiting around.</p>
                            <h2>How To Use The Demo</h2>
                                <ol>
                                    <li>Type in stuff on the left.</li>
                                    <li>See the live updates on the right.</li>
                                </ol>
                            <p>That's it. Pretty simple. There's also a drop-down option in the upper right to switch between various views:</p>
                                <ul>
                                    <li><strong>Preview:</strong> A live display of the generated HTML as it would render in a browser.</li>
                                    <li><strong>HTML Source:</strong> The generated HTML before your browser makes it pretty.</li>
                                    <li><strong>Lexer Data:</strong> What <a href="https://github.com/markedjs/marked/">marked</a> uses internally, in case you like gory stuff like this.</li>
                                    <li><strong>Quick Reference:</strong> A brief run-down of how to format things using markdown.</li>
                                </ul>
                            <h2>Why Markdown?</h2>
                            <p>It's easy. It's not overly bloated, unlike HTML. Also, as the creator of <a href="http://daringfireball.net/projects/markdown/">markdown</a> says,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The overriding design goal for Markdown's formatting syntax is to make it as readable 
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as possible. The idea is that a Markdown-formatted document should be 
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;publishable as-is, as plain text, without looking like it's been marked up with tags 
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or formatting instructions.</p>
                            <p>Ready to start writing?</p>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
        <Button variant="outlined" size="small" onClick={ handleClickOpen }>We use Marked for Content Writing</Button>

        </>
    );
}

export default Marked;