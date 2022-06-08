import React from 'react';
import "./ProductCard.css";

/**
 * Creates a product card component out of the
 * product and image alt  text in the params.
 * @param product to display on the productCard
 * @param imageAlt for the image.
 * @returns {JSX.Element}
 */
function ProductCard({product, imageAlt}) {
    return (
        <div className="product-card-item">
            <img id={"productImage"} src={ "/images/squoosed-product" + product.productId + ".jpg" } alt={ imageAlt }/>
            <div className="product-text-container">
                <h3 className="product-card-title">{ product.productName }</h3>
                <p className="product-card-description">{ product.description }</p>
            </div>
            <a href={"/checkout/" + product.productId }>Order now</a>
        </div>
    );
}

export default ProductCard;
