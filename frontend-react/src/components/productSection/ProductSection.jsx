import React from 'react';
import ProductCard from "../productCard/ProductCard";
import "./ProductSection.css";

function ProductSection() {
    return (
        <section id={"productCardSection"}>
            <ProductCard
                imageUrl={"/images/oneDayCourseCard.jpeg"}
                imageAlt={"First-aid kit"}
                title={"One day course"}
                description={"A 6 hour refreshment course for those who have taken a course during the last 3 years."}
                navigation={"/checkout/oneDayCourse"}/>
            <ProductCard
                imageUrl={"/images/twoDayCourseCard.jpeg"}
                imageAlt={"Woman performing first-aid"}
                title={"Two day course"}
                description={"A full course for those who haven't had a course before."}
                navigation={"/checkout/twoDayCourse"}
            />
            <ProductCard
                imageUrl={"/images/consultation.jpeg"}
                imageAlt={"4 people chatting"}
                title={"Short consultation"}
                description={"We provide a short consultation up to an hour on a specific topic, chosen by the client."}
                navigation={"/checkout/shortconsultation"}/>
        </section>
    );
}

export default ProductSection;
