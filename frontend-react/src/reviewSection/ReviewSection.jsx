import React from 'react';
import Review from "../components/review/Review";
import "./ReviewSection.css"
import {Button} from "@mui/material";




function ReviewSection() {

    let reviews = []
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })
    reviews.push({
        author: "arne per",
        reviewTitle: "",
        description: "I like this betiful website it is honestly the best ever",
        star: 4
    })

    return (
        <section id={"review-section"}>
            <div className={"review-section-header"}>
                <label className={"review-section-label"}>Customer reviews</label>
                <Button variant="outlined" color={"error"}>Add review</Button>
            </div>
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
