import React, {useEffect, useState} from 'react';
import ProductCard from "../productCard/ProductCard";
import "./ProductSection.css";
import {getAllProducts} from "../../services/ProductService";

function ProductSection({productId}) {

        const [products, setProducts] = useState([]);

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
                                imageAlt={"First-aid kit"}
                                key={productId}
                            />
                        )
                    })
                }
            </section>
        );
}

export default ProductSection;
