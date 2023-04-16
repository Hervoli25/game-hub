import axios from "axios";

export default axios.create({
    params: {
        baseUrl: 'https://api.rawg.io/api',
        key: '2e0f129f564b4b85b7adcc119dcf4fc0'
    }
});
