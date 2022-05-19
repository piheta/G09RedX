import React from 'react';
import Footer from "../components/footer/Footer";
import NavProduct from "../components/navProduct/NavProduct";
import ProductPage from "../components/productPage/productPage";
import ReviewSection from "../reviewSection/ReviewSection";

function OneDayCourse() {
    return (
        <div>
            <NavProduct/>
            <ProductPage
                imageUrl={"/images/cropped-onedaycourse.jpg"}
                imageAlt={"Course One day"}
                price={"20$"}
                productTitle={"One day course! Learn everything in one day"}
                ratingValue={4}
                productImgUrl1={"/images/squoosed-twodaycourse.jpg"}
                productImgUrl2={"/images/squoosed-consultation.jpg"}
                productImgDesc1={"Two day course"}
                productImgDesc2={"Short consultation"}
                navigatePathImg1={"/checkout/twoDayCourse"}
                navigatePathImg2={"/checkout/shortconsultation"}/>
            <ReviewSection />
            <Footer/>
        </div>
    );
}

export default OneDayCourse;
