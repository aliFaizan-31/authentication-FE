import axios from 'axios';

const axiosRef = axios.create({
    baseURL: process.env.REACT_APP_NODE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
const token = localStorage.getItem('authToken');
axiosRef.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

export { axiosRef };