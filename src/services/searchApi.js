import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
    }
})


export default api;

