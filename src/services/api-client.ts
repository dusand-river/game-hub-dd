import axios from "axios";

const rawgIO = {
  baseURL: "https://api.rawg.io/api",
  apiKey: "ce0663a4850440cba32f735a9c569e3e",
};

export default axios.create({
  baseURL: rawgIO.baseURL,
  params: {
    key: rawgIO.apiKey,
  },
});
