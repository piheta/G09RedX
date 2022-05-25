import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_URL;

export function getAllProducts() {
    let productArray = [];
    axios({
        method: 'get',
        url: API_BASE_URL + '/products',
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json"
        },
    }).then((response) => {
        if (response.status === 200) {
            response.data.forEach((product) => productArray.push(product));
        }
    })
    return productArray;
};

export async function getProductById(productId) {
    return await axios({
        method: 'get',
        url: API_BASE_URL + '/products/' + productId,
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

