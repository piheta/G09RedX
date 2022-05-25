import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_URL;


export function addReview(review, productId) {
    axios({
        method: 'post',
        url: API_BASE_URL + '/review/products/' + productId,
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json"
        },
        data: review
    }).catch(error => {
        console.log(error.response.statusCode);
    })
};
