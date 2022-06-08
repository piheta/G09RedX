import React, {useEffect, useState} from 'react';
import ProductCard from "../productCard/ProductCard";
import "./ProductSection.css";
import {getAllProducts} from "../../services/ProductService";

/**
 * Creates the product section on the homepage
 * which displays 3 product cards with all our products
 * and their info.
 * @returns {JSX.Element}
 */
function ProductSection() {

    const [products, setProducts] = useState([]);

    /**
     * Sends a request to the backend to get a list
     * of all the products in our DB.
     */
    useEffect(() => {
        getAllProducts().then((productData) => {
            setProducts(productData);
        })
    }, [])

    return (
        <section id={"product-card-section"}>
            {
                products.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            imageAlt={product.productName}
                            key={product.productId}
                        />
                    )
                })
            }
        </section>
    );
}

export default ProductSection;
