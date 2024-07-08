import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (topic) => {
    const res = await axios.get(`/search?query=${topic}`);
    return res.data.hits;  
}