import React from 'react';
import "./Review.css"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useSelector} from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Edit} from "@mui/icons-material";

/**
 * A single ReviewCard component.
 * @param review the review object it represents
 * @param onDelete pass in the delete function when pressing the trashcan
 * @param setReviewToEdit pass in the setter to let the ReviewModal know if it is edit or add mode.
 * @param setDisplayModal sets the display modal to true.
 * @returns {JSX.Element}
 */
function Review({review, onDelete, setReviewToEdit, setDisplayModal}) {

    // Get the state of the user field in userReducer
    const user = useSelector(state => state.userReducer.user);
    const current = new Date();

    function getCurrentDate(){
        return `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    }

    return (
        <div className={"review-component"}>
            <div className={"review-header"}>
                <div className={"review-username"}>
                    <h2>{review.customer.userName}</h2>
                    <div className={"review-icon-wrapper"}>
                        {
                            user.userName && user.userName === review.customer.userName ?
                                <Edit onClick={() => (setReviewToEdit(review), setDisplayModal(true))} className={'review-icon'} sx={{fontSize: 25}}/>
                                :
                                null
                        }
                        {
                            user.roles && user.roles.includes("ROLE_ADMIN") ?
                                <DeleteForeverIcon onClick={() => onDelete(review.reviewId)} className={"review-icon"} sx={{fontSize: 25}}/>
                                :null
                        }
                    </div>
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
