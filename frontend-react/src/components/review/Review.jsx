import React, {useState} from 'react';
import "./Review.css"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useSelector} from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {deleteReview, getAllProductReviewById} from "../../services/ReviewService";
import {useParams} from "react-router";

function Review({review}) {


    const user = useSelector(state => state.userReducer);
    const current = new Date();

    function getCurrentDate(){
        return `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    }

    return (
        <div className={"review-component"}>
            <div className={"review-header"}>
                <div className={"review-username"}>
                    <h1>{review.customer.userName}</h1>
                    {
                        user.user.roles && user.user.roles.includes("ROLE_ADMIN") ?
                        <DeleteForeverIcon onClick={() => deleteReview(review.reviewId)} className={"review-icon"} sx={{fontSize: 25}}/>
                        :null
                    }
                </div>

                <h4>{getCurrentDate()}</h4>
                <Rating
                    readOnly
                    name="customized-color"
                    value={review.rating}
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
