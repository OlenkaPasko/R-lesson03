import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (topic) => {
  //const res = await axios.get(`/search?query=${topic}&page=2&hitsPerPage=20`);
    //можна як пер.вар, але краще через об'єкт парамс
  const res = await axios.get("/search", {
    params: {
      query: topic,
      page: 1,
      hitsPerPage: 10,
    },
  });
  return res.data.hits;
};
