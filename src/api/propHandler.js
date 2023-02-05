import axios from 'axios';

const URL = "http://lisehoeg.dk";

export const propHandler = () => {
    return axios.get(`${URL}/api/slidenauth`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
};