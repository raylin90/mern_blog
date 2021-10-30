import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = porps => {
    return(
        <div style={{ padding: "20px", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png" alt="personal img" style={{ width: "300px", marginRight: "60px"}}/>
            <div >
                <div style={{ width: "500px"}}>
                    <Typography variant="h5">Hi, My name is</Typography>
                    <br />
                    <Typography variant="h3" color="secondary">&nbsp;&nbsp;Ray Lin</Typography>
                    <br />
                    <Typography variant="body1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I recently completed an intensive 14 weeks coding boot camp, which helped me to enhance my knowledge on three full stacks (Python; Java; and MERN). I really enjoy learning new things; constantly seeking for new learning opportunities, and I really look forward to a company where I can combine my experience and share my skills.</Typography>
                    <br /><br />
                    <Typography variant="body2">If you are interested to know more, reach out to me on LinkedIn/Github/Email Me. Stay in Touch!</Typography>
                    <Link href="https://www.linkedin.com/in/raylin90/"><LinkedInIcon fontSize="medium" color="action"/></Link>
                    <Link href="https://github.com/raylin90"><GitHubIcon fontSize="medium" color="action"/></Link>
                    <Link href="mailto: rayz.lin90@gmail.com"><EmailIcon fontSize="medium" color="action"/></Link>
                </div>
            </div>
        </div>
    );
}

export default About;