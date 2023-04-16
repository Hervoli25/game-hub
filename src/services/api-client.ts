import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2e0f129f564b4b85b7adcc119dcf4fc0'
    }
});
