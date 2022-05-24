import React, {useEffect, useRef, useState} from 'react';
import Review from "../review/Review";
import "./ReviewSection.css"
import {Button, FormControlLabel} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import {useSelector} from "react-redux";
import {addReview} from "../../services/ReviewService";




function ReviewSection({productId}) {

    let reviews = []
    for (let i = 0; i < 6; i++){
        reviews.push({
            reviewId: i,
            author: "arne per",
            description: "I like this beatiful website it is honestly the best ever",
            star: 4
        })
    }


    const [state, setState] = useState(false);
    const user = useSelector(state => state.userReducer);

    function submitNewReview(event){
        console.log(event)
        event.preventDefault();
        const inputList = [...event.target]
        const newReview = {
            "rating": checkHeartRate(inputList.slice(0, 5)),
            "description": inputList[6].value
        }
        addReview(newReview, productId);
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
            setState(false);
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
                { state === false ?
                    <Button onClick={() => setState(!state)} variant="outlined" color={"error"}>Add review</Button>
                    : null
                }
            </div>
            { state === true ?
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
                            <Button type={"submit"} className={"modal-button"} variant="outlined" sx={{color: "#ec361e", borderColor: "#ec361e",}}>Add review</Button>
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
