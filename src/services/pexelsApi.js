import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_KEY,
  },
});

export const fetchImages = async (query = "car") => {
  const { data } = await instance.get("search", {
    params: {
      query,
    },
  });
  return data.photos;
};
