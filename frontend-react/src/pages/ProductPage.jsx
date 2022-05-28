import React, {useEffect, useState} from 'react';
import Nav from "../components/nav/Nav";
import CheckoutSection from "../components/checkoutSection/CheckoutSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router";
import {getAllProducts, getProductById} from "../services/ProductService";

function ProductPage() {

    const {productId} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((productData) => {
            setProducts(productData);
        })
    }, [])

    return (
        <div>
            <Nav productId={productId}/>
            <CheckoutSection products={products} productId={productId}/>
            <ReviewSection productId={productId}/>
            <Footer />
        </div>
    );
}

export default ProductPage;
