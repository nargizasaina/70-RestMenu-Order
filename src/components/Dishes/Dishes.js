import React from 'react';import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Dishes.css';

const Dishes = (props) => {
    return (
        <Card sx={{ maxWidth: 500, margin: 2, display: 'flex'}}>
            <CardMedia
                component="img"
                height="220"
                image={props.image}
                alt="dish image"
            />
            <CardContent style={{width: '40%', display: 'flex', flexDirection: 'column'}}>
                <Typography gutterBottom variant="h6" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {props.price} $
                </Typography>
                <Button size="small" style={{alignSelf: 'flex-end'}} onClick={props.onClick}>Add to cart</Button>
            </CardContent>
        </Card>
    );
};

export default Dishes;