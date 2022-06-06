import React from 'react';
import {useNavigate} from 'react-router';
import "./ProductCard.css";

function ProductCard({product, imageAlt}) {
    const navigate = useNavigate();
    return (
        <div className="product-card-item">
            <img id={"productImage"} src={ "/images/squoosed-product" + product.productId + ".jpg" } alt={ imageAlt }/>
            <div className="product-text-container">
                <h3 className="product-card-title">{ product.productName }</h3>
                <p className="product-card-description">{ product.description }</p>
            </div>
            <a href={"/checkout/" + product.productId }>Buy now</a>
        </div>
    );
}

export default ProductCard;
