import React from 'react';
import ProductCard from "../productCard/ProductCard";
import "./ProductSection.css";

function ProductSection() {
    return (
        <section id={"product-card-section"}>
            <ProductCard
                imageUrl={"/images/squoosed-onedaycourse.jpg"}
                imageAlt={"First-aid kit"}
                title={"One day course"}
                description={"A 6 hour refreshment course for those who have taken a course during the last 3 years."}
                navigation={"/checkout/oneDayCourse"}/>
            <ProductCard
                imageUrl={"/images/squoosed-twodaycourse.jpg"}
                imageAlt={"Woman performing first-aid"}
                title={"Two day course"}
                description={"A full course for those who haven't had a course before."}
                navigation={"/checkout/twoDayCourse"}
            />
            <ProductCard
                imageUrl={"/images/squoosed-consultation.jpg"}
                imageAlt={"4 people chatting"}
                title={"Short consultation"}
                description={"We provide a short consultation up to an hour on a specific topic, chosen by the client."}
                navigation={"/checkout/shortconsultation"}/>
        </section>
    );
}

export default ProductSection;
