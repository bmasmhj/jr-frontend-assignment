// create axios instance
import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://api.bimash.com.np/music',
    timeout: 5000,
});

export default Instance;