import React from 'react';
import "./Review.css"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Review({review}) {



    const current = new Date();

    console.log(review)
    function getCurrentDate(){
        return `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    }


    return (
        <div className={"review-component"}>
            <div className={"review-header"}>
                <h1>{review.author}</h1>
                <h4>{getCurrentDate()}</h4>
                <Rating
                    readOnly
                    name="customized-color"
                    value={review.star}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon sx={{color: "#ec361e"}} fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon sx={{color: "#ec361e"}} fontSize="inherit" />}
                />
            </div>
            <div className={"review-comment"}>
                <p>{review.description}</p>
            </div>
        </div>
    );
}

export default Review;
