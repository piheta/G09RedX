import React from 'react';
import NavProduct from "../components/navProduct/NavProduct";
import ProductPage from "../components/productPage/productPage";
import Footer from "../components/footer/Footer";

function TwoDayCourse() {
    return (
        <div>
            <NavProduct/>
            <ProductPage
                imageUrl={"/images/cropped-twodaycourse.jpg"}
                imageAlt={"Two day course"}
                price={"30$"}
                productTitle={"Two day course! Learn everything in two days"}
                ratingValue={4.5}
                productImgUrl1={"/images/squoosed-onedaycourse.jpg"}
                productImgUrl2={"/images/squoosed-consultation.jpg"}
                productImgDesc1={"One day course"}
                productImgDesc2={"Short consultation"}
                navigatePathImg1={"/checkout/oneDayCourse"}
                navigatePathImg2={"/checkout/shortconsultation"}/>
            <Footer/>
        </div>
    );
}

export default TwoDayCourse;
