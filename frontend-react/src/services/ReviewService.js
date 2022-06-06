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
        console.log(error.response.status);
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

export function deleteReview(reviewId) {
     axios({
        method: 'delete',
        url: API_BASE_URL + '/review/products/' + reviewId,
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getCookie("jwt")
        }
    }).catch(error => {
        console.log(error.response.statusCode);
    })
};

export async function editReview(newReview, reviewId) {
   return await axios({
       method: 'patch',
       url: API_BASE_URL + '/review/products/' + reviewId,
       headers: {
           'Accept': '*/*',
           "Content-Type": "application/json",
           "Authorization": "Bearer " + getCookie("jwt")
       },
       data: newReview
   }).then((response) => {
       if (response.status === 200) {
           return response.data;
       }
   })
}
