import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import {useSelector} from "react-redux";
import "./ReviewModal.css";

/**
 * A component that changes between Add/Edit based on
 * the action of the user.
 * @param reviewToEdit null of the user is adding a new review
 * @param handleEditReview handles API call to edit Review
 * @param submitNewReview handles API call to add Review
 * @param warningText getter for the warningText on the Add modal
 * @returns {JSX.Element}
 */
function ReviewModal({reviewToEdit, handleEditReview, submitNewReview, warningText}) {

    const user = useSelector(state => state.userReducer.user);

    /**
     * Helper function to switch between Edit and Add modal.
     * @returns {boolean} true if editing, false if Adding review.
     */
    function isEditing() {
        return Object.keys(reviewToEdit).length !== 0;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={(event) => {
                    isEditing() ? handleEditReview(event, reviewToEdit.reviewId) : submitNewReview(event)
                }} className={"modal-wrapper"}>
                    <label className={"modal-title"}>{isEditing() ? 'Edit' : 'Add'} review</label>
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
                    <button className={"modal-button"}>{isEditing() ? 'Edit' : 'Add'} Review</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewModal;
