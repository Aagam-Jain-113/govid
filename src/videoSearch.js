import axios from 'axios'

const KEY = 'AIzaSyBqUDlGj36pZuwFHfvgHH01555t5eab1z0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
}) 