import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: { 'Authorization': `Bearer ${process.env.GITHUB_CLIENT_SECRET}` }
});

export default api;