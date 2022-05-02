import React from 'react';
import '../../styles/global.css'
import './productPage.css'
import {Button, Rating, Tooltip} from "@mui/material";

function ProductPage({imageUrl, imageAlt, productTitle, ratingValue, price,
                      productImgUrl1, productImgUrl2, productImgDesc1 , productImgDesc2}) {




    return (
        <div className={"checkout-container"}>
            <div className={"checkout-img-wrapper"}>
                <img src={imageUrl} alt={imageAlt} height={500} width={300}/>
            </div>

            <div className={"checkout-summary"}>

                <div className={"checkout-flex-wrapper"}>
                    <div className={"checkout-header"}>
                        <h1 className={"product-title"}>
                            {productTitle}
                        </h1>
                        <div className={"checkout-rating"}>
                            <Rating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly
                                    size={"large"}/>
                        </div>
                    </div>
                    <div className={"checkout-price-wrapper"}>
                        <div className={"checkout-price-container"}>
                            <div className={"price-tag"}>
                                Price<br/>
                                <strong>{price}</strong>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={"checkout-button"}>
                        <Button variant="outlined" color={"error"}>Buy course</Button>
                    </div>
                    <hr/>
                    <h2 className={"related-products-title"}>Other related products</h2>
                    <div className={"checkout-product-wrapper"}>
                        <div className={"checkout-product"}>
                            <Tooltip title={<h1 style={{ fontSize: "1rem"}}>{productImgDesc1}</h1>} placement="top">
                                <button className={"product-anchor-1"} href={"/#"}>
                                    <img alt={"product1"} src={productImgUrl1}/>
                                </button>
                            </Tooltip>
                        </div>
                        <div className={"checkout-product"}>
                            <Tooltip title={<h1 style={{ fontSize: "1rem"}}>{productImgDesc2}</h1>} placement="top">
                                <button className={"product-anchor-2"} href={"/#"}>
                                    <img alt={"product2"} src={productImgUrl2}/>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>);}

export default ProductPage;
