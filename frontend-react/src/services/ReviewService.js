import axios from "axios";
import {getCookie} from "./CookieService";

const API_BASE_URL = process.env.REACT_APP_URL;

export async function addReview(review, productId) {
    return await axios({
        method: 'post',
        url: API_BASE_URL + '/review/products/' + productId,
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getCookie("jwt")
        },
        data: review
    }).then((response) => {
        if (response.status === 201) {
            return response.data;
        }
    }).catch(error => {
        console.log(error.response.statusCode);
    })
};

export async function getAllProductReviewById(productId){
    return await axios({
        method: 'get',
        url: API_BASE_URL + '/review/products/' + productId,
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json"
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    })
};

export async function deleteReview(reviewId) {
    return await axios({
        method: 'delete',
        url: API_BASE_URL + '/review/products/' + reviewId,
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getCookie("jwt")
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    }).catch(error => {
        console.log(error.response.statusCode);
    })
};
