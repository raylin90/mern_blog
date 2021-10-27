import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const MediaCard = props => {

    // destructure props
    const { blog } = props;

    return(
        <Card sx={{ maxWidth: 500, minWidth: 500, margin: "20px 30px" }}>
            <CardMedia
                component="img"
                height="240"
                image={ blog.url }
                alt="blog image"
            />
            <CardActions >
                <Button size="small" sx={{ paddingButtom: "0px"}}><Link href={`/blog/${ blog._id }`} underline="hover">read more..</Link></Button>
            </CardActions>
            <CardContent sx={{ paddingTop: "0px"}}>
                <Typography gutterBottom variant="h5" noWrap={true} component="div">{ blog.title }</Typography>
                <Typography variant="body2" sx={{ height: "40px"}} className="postDesc" >{ blog.content }</Typography>
            </CardContent>
        </Card>
    );
}
// color="text.secondary"
export default MediaCard;