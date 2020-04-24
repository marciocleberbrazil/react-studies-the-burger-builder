import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-5bfca.firebaseio.com/'
});

export default instance;