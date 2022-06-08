import axios from "axios";

/**
 * A class to hold all the requests sent to the
 * /products endpoints.
 */

const API_BASE_URL = process.env.REACT_APP_URL;

export function getAllProducts() {
    return axios({
        method: 'get',
        url: API_BASE_URL + '/products',
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

