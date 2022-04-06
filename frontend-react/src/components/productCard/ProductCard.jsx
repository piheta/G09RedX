import React from 'react';
import "./ProductCard.css";
function ProductCard({ image, imageAlt, title, description}) {
    return (
        <div>
            <img src={ image } alt={ imageAlt }/>
            <div className="card-item-description">
                <h3 className="product-card-title">{ title }</h3>
                <p className="product-card-description">{ description }</p>
            </div>
            <a href="/#">Buy now</a>
        </div>
    );
}

export default ProductCard;