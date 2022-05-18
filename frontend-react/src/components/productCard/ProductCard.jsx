import React from 'react';
import {useNavigate} from 'react-router';
import "./ProductCard.css";

function ProductCard({ imageUrl, imageAlt, title, description}) {
    const navigate = useNavigate();
    return (
        <div className="product-card-item">
            <img id={"productImage"} src={ imageUrl } alt={ imageAlt }/>
            <div className="product-text-container">
                <h3 className="product-card-title">{ title }</h3>
                <p className="product-card-description">{ description }</p>
            </div>
            <a onClick={() => navigate("/checkout")}>Buy now</a>
        </div>
    );
}

export default ProductCard;
