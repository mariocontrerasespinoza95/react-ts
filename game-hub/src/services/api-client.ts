import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0126ad4c7b1b4973a710d24790416522',
    },
});
