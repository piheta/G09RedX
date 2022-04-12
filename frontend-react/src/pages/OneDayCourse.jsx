import React from 'react';
import Footer from "../components/footer/Footer";
import NavProduct from "../components/navProduct/NavProduct";
import ProductPage from "../components/checkOut/productPage";

function OneDayCourse() {
    return (
        <div>
            <NavProduct/>
            <ProductPage
                imageUrl={"/images/oneDayCourseCard.jpeg"}
                imageAlt={"Course One day"}
                price={"20$"}
                productTitle={"One day course! Learn everything in one day"}
                ratingValue={4}
                productImgUrl1={"/images/twoDayCourseCard.jpeg"}
                productImgUrl2={"/images/consultation.jpeg"}
                productImgDesc1={"Two day course"}
                productImgDesc2={"Short consultation"}/>
            <Footer/>
        </div>
    );
}

export default OneDayCourse;
