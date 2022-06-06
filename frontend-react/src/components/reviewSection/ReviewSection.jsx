import React, {useEffect, useState} from 'react';
import Review from "../review/Review";
import "./ReviewSection.css"
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {addReview, deleteReview, editReview, getAllProductReviewById} from "../../services/ReviewService";
import ReviewModal from "../reviewModal/ReviewModal";
import {useNavigate} from "react-router";


function ReviewSection({productId}) {

    const [reviews, setReviews] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState({});
    const [warningText, setWarningText] = useState('');
    const isLogged = useSelector(state => state.isLogged.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProductReviewById(productId).then((reviewData) => {
            setReviews(reviewData);
        })
    }, [productId])


    function submitNewReview(event) {
        event.preventDefault();
        const inputList = [...event.target]
        const reviewData = {
            "rating": checkHeartRate(inputList.slice(0, 5)),
            "description": inputList[6].value
        }
        addReview(reviewData, productId, setWarningText).then((newReview) => {
            if (newReview != null) {
                setReviews((prevReviews) => [...prevReviews, newReview]);
                setDisplayModal(false);
            }
        })
    }

    function handleEditReview(event, reviewId) {
        event.preventDefault();
        const inputList = [...event.target]
        const reviewData = {
            "rating": checkHeartRate(inputList.slice(0, 5)),
            "description": inputList[6].value
        };
        editReview(reviewData, reviewId).then((newReview) => {
            const newReviews = [...reviews];
            newReviews[reviews.findIndex((review) => review.reviewId === reviewId)] = newReview;
            setReviews(newReviews);
            setDisplayModal(false);
            setReviewToEdit({});
        });
    }

    function handleDeleteReview(reviewId) {
        setReviews((prevReviews) => [...prevReviews.filter((review) => review.reviewId !== reviewId)]);
        deleteReview(reviewId);
    }

    function checkHeartRate(hearts) {
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].checked === true) {
                return i + 1;
            }
        }
    }

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal') {
            setDisplayModal(false);
            setWarningText('');
            setReviewToEdit({})
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
              
                <h1 className={"review-section-label"}>Customer reviews</h1>
                {displayModal === false ?
                    <button className={"review-section-button"} onClick={() => isLogged ? setDisplayModal(true) : navigate("/login")}>Add
                        review</button>
                    : null
                }
            </div>
            {displayModal === true ? <ReviewModal reviewToEdit={reviewToEdit} handleEditReview={handleEditReview}
                                                  submitNewReview={submitNewReview}
                                                  warningText={warningText}/>

                : null
            }
            <hr/>
            <div className={"review-section-review-list"}>
                {
                    reviews.map((review) => <Review review={review} key={review.reviewId} onDelete={handleDeleteReview}
                                                    setReviewToEdit={setReviewToEdit}
                                                    setDisplayModal={setDisplayModal}/>)
                }
            </div>
        </section>
    );
}

export default ReviewSection;
