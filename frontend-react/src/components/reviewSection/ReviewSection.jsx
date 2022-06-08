import React, {useEffect, useState} from 'react';
import Review from "../review/Review";
import "./ReviewSection.css"
import {useSelector} from "react-redux";
import {addReview, deleteReview, editReview, getAllProductReviewById} from "../../services/ReviewService";
import ReviewModal from "../reviewModal/ReviewModal";
import {useNavigate} from "react-router";

/**
 * The component that represents the whole review section on the
 * checkout page. Uses the review component and API call to create
 * review cards of all the review for the entered productId.
 * @param productId the product ID the review section belongs to.
 * @returns {JSX.Element}
 */
function ReviewSection({productId}) {

    const [reviews, setReviews] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState({});
    const [warningText, setWarningText] = useState('');
    const isLogged = useSelector(state => state.isLogged.isLogged);
    const navigate = useNavigate();

    /**
     * Sends a request to get all the reviews for a given product page,
     * everytime the productId  changes (when swapping product page).
     */
    useEffect(() => {
        getAllProductReviewById(productId).then((reviewData) => {
            setReviews(reviewData);
        })
    }, [productId])


    /**
     * Gets the info for a new  review entered by a customer, sends
     * an API call to the backend and updates the ReviewSection/AddReviewModal according
     * to the response.
     * @param event
     */
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

    /**
     * Gets the new info for an existing review and sends an API call to the
     * backend. Removes the 'old' review and replaces it with the new description
     * and rating, in the ReviewSection.
     * @param event
     * @param reviewId the review you want to edit.
     */
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

    /**
     * Deletes and removes the review with the entered reviewId
     * from the ReviewSection and DB.
     * @param reviewId
     */
    function handleDeleteReview(reviewId) {
        setReviews((prevReviews) => [...prevReviews.filter((review) => review.reviewId !== reviewId)]);
        deleteReview(reviewId);
    }

    /**
     * Helper method to get the number of hearts
     * entered on a review.
     * @param hearts
     * @returns {number} of hearts entered
     */
    function checkHeartRate(hearts) {
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].checked === true) {
                return i + 1;
            }
        }
    }

    /**
     * Lets the user press outside of the Add/Edit ReviewModal
     * to close it.
     * @param event
     */
    const handleClickOutside = (event) => {
        if (event.target.className === 'modal') {
            setDisplayModal(false);
            setWarningText('');
            setReviewToEdit({})
        }
    };

    /**
     * Handles mouse clicks on screen.
     */
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
                {
                    /**
                     * Displays modal if button is clicked and user logged in.
                     */
                    displayModal === false ?
                    <button className={"review-section-button"} onClick={() => isLogged ? setDisplayModal(true) : navigate("/login")}>Add
                        review</button>
                    : null
                }
            </div>
            {
                /**
                 * If Modal is displaying it either shows edit/add reviewModal.
                 */
                displayModal === true ?
                <ReviewModal reviewToEdit={reviewToEdit}
                             handleEditReview={handleEditReview}
                             submitNewReview={submitNewReview}
                             warningText={warningText}/>
                : null
            }
            <hr/>
            <div className={"review-section-review-list"}>
                {
                    /**
                     * Iterates over all reviews.
                     */
                    reviews.map((review) =>
                        <Review review={review}
                                key={review.reviewId}
                                onDelete={handleDeleteReview}
                                setReviewToEdit={setReviewToEdit}
                                setDisplayModal={setDisplayModal}/>)
                }
            </div>
        </section>
    );
}

export default ReviewSection;
