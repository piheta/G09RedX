import React from 'react';
import NavProduct from "../components/navProduct/NavProduct";
import ProductPage from "../components/productPage/productPage";
import Footer from "../components/footer/Footer";

function ShortConsultation() {
    return (
        <div>
            <NavProduct/>
            <ProductPage
                imageUrl={"/images/cropped-shortconsultation.jpg"}
                imageAlt={"Short consultation"}
                price={"10$"}
                productTitle={"Short consultation! Quick talk on different topics"}
                ratingValue={4}
                productImgUrl1={"/images/squoosed-onedaycourse.jpg"}
                productImgUrl2={"/images/squoosed-twodaycourse.jpg"}
                productImgDesc1={"One day course"}
                productImgDesc2={"Two day course"}
                navigatePathImg1={"/checkout/oneDayCourse"}
                navigatePathImg2={"/checkout/twoDayCourse"}/>
            <Footer/>
        </div>
    );
}

export default ShortConsultation;
