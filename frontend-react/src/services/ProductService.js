import axios from "axios";

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

