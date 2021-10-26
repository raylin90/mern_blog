import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            <CardActions sx={{ paddingButtom: "0px"}}>
                <Button size="small">read more...</Button>
            </CardActions>
            <CardContent sx={{ paddingTop: "0px"}}>
                <Typography gutterBottom variant="h5" noWrap={{ wordWrap: "break-word" }} component="div">{ blog.title }</Typography>
                <Typography variant="body2" sx={{ height: "40px"}} color="text.secondary">{ blog.content }</Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard;