import React from 'react';
import ProductCard from "./ProductCard";

function ProductSection() {
    return (
        <section>
            <ProductCard
                imageUrl = { "/images/oneDayCourseCard.jpeg" }
                imageAlt = { "First-aid kit" }
                title = { "One day course" }
                description = { "A 6 hour refreshment course for those who have taken a course during the last 3 years." }
            />
        </section>
    );
}

export default ProductSection;