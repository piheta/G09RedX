import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Button} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import "./ReviewModal.css";

function ReviewModal({reviewToEdit, handleEditReview, submitNewReview, warningText}) {

    const user = useSelector(state => state.userReducer.user);

    function isEditing() {
        return Object.keys(reviewToEdit).length !== 0;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={(event) => {
                    isEditing() ? handleEditReview(event, reviewToEdit.reviewId) : submitNewReview(event)
                }} className={"modal-wrapper"}>
                    <label className={"modal-title"}>{isEditing() ? 'EDIT' : 'ADD'} REVIEW</label>
                    <label className={"modal-username-wrap"}>Logged in as:
                        <label className={"modal-username"}>{user.userName}</label>
                    </label>
                    <label className={"modal-rating-label"}>Select hearts:</label>
                    <Rating
                        name="customized-color"
                        defaultValue={isEditing() ? reviewToEdit.rating : 3}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={1}
                        icon={<FavoriteIcon sx={{color: "#ec361e"}} fontSize="inherit"/>}
                        emptyIcon={<FavoriteBorderIcon sx={{color: "#ec361e"}} fontSize="inherit"/>}
                        size={"large"}
                        sx={{fontSize: "3rem"}}
                    />
                    <textarea defaultValue={isEditing() ? reviewToEdit.description : ''} className={"modal-text"}/>
                    {
                        warningText !== '' ? <p className={'error-message'}>{warningText}</p> : null
                    }
                    <Button type={"submit"} className={"modal-button"} variant="outlined"
                            sx={{color: "#ec361e", borderColor: "#ec361e", fontSize: "1.5rem"}}>{isEditing() ? 'Edit' : 'Add'} Review</Button>
                </form>
            </div>
        </div>
    )
}

export default ReviewModal;
