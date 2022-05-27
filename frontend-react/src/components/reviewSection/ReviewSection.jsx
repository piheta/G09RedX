import React, {useEffect, useState} from 'react';
import Review from "../review/Review";
import "./ReviewSection.css"
import {Button} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import {useSelector} from "react-redux";
import {addReview, getAllProductReviewById} from "../../services/ReviewService";





function ReviewSection({productId}) {


    const [reviews, setReviews] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const user = useSelector(state => state.userReducer);

    useEffect(() => {
        getAllProductReviewById(productId).then((reviewData) => {
            setReviews(reviewData);
        })
    }, [productId])


    function submitNewReview(event){
        console.log(event)
        event.preventDefault();
        const inputList = [...event.target]
        const newReview = {
            "rating": checkHeartRate(inputList.slice(0, 5)),
            "description": inputList[6].value
        }
        addReview(newReview, productId);
        getAllProductReviewById(productId).then((reviewData) => {
            setReviews(reviewData);
            setDisplayModal(false);
        })
    }

    function checkHeartRate(hearts){
        for (let i = 0; i < hearts.length; i++){
            if (hearts[i].checked === true){
                return i + 1;
            }
        }
    }

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal') {
            setDisplayModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <section id={"review-section"}>
            <div className={"review-section-header"}>
                <label className={"review-section-label"}>Customer reviews</label>
                { displayModal === false ?
                    <Button onClick={() => setDisplayModal(true)} size={"large"} variant="outlined" color={"error"}>Add review</Button>
                    : null
                }
            </div>
            { displayModal === true ?
                <div className="modal">
                    <div className ="modal-content">
                        <form className={"modal-wrapper"} onSubmit={event => submitNewReview(event)}>
                            <label className={"modal-title"}>Add Review</label>
                            <label className={"modal-username"}>{ user.user.userName }</label>
                            <Rating
                                name="customized-color"
                                defaultValue={3}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={1}
                                icon={<FavoriteIcon sx={{color: "#ec361e"}} fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon sx={{color: "#ec361e"}} fontSize="inherit" />}
                                size={"large"}
                            />
                            <textarea className={"modal-text"} />
                            <Button type={"submit"} className={"modal-button"} variant="outlined" sx={{color: "#ec361e", borderColor: "#ec361e"}}>Add review</Button>
                        </form>
                    </div>
                </div>
                : null
            }
            <hr />
            <div className={"review-section-review-list"}>
                {
                    reviews.map((review) => <Review review={review} key={review.reviewId}/>)
                }
            </div>
        </section>
    );
}

export default ReviewSection;
