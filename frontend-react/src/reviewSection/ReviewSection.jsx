import React from 'react';
import Review from "../components/review/Review";
import "./ReviewSection.css"




function ReviewSection() {
    return (

        <section id={"review-section"}>
            <Review userName={"Arne per"} comment={"I like this betiful website it is honestly the best ever"} />
        </section>
    );
}

export default ReviewSection;
