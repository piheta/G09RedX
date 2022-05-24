import React, {useEffect, useRef, useState} from 'react';
import Review from "../review/Review";
import "./ReviewSection.css"
import {Button} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";




function ReviewSection() {

    let reviews = []
    for (let i = 0; i < 6; i++){
        reviews.push({
            author: "arne per",
            reviewTitle: "",
            description: "I like this betiful website it is honestly the best ever",
            star: 4
        })
    }


    const [state, setState] = useState(false);



    let ref = useRef();


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
                    <div className ="modal-content" ref={ref}>
                        <div className={"modal-wrapper"}>
                            <label className={"modal-title"}>Add Review</label>
                            <label className={"modal-username"}>Username</label>
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
                            <Button className={"modal-button"} variant="outlined" color={"error"}>Add review</Button>
                        </div>
                    </div>
                </div>
                : null
            }
            <hr />
            <div className={"review-section-review-list"}>
                {
                    reviews.map((review) => <Review userName={review.author} comment={review.description} rating={review.star} />)
                }
            </div>
        </section>
    );
}

export default ReviewSection;
