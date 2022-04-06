import React from 'react';
import "./ProductCard.css";
function ProductCard({ imageUrl, imageAlt, title, description}) {
    return (
        <div className="product-card-item">
            <img src={ imageUrl } alt={ imageAlt }/>
            <div className="card-item-description">
                <h3 className="product-card-title">{ title }</h3>
                <p className="product-card-description">{ description }</p>
            </div>
            <a href="/#">Buy now</a>
        </div>
    );
}

export default ProductCard;