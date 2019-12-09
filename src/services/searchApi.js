import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/search'
})


export default api;

