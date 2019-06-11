import axios from "axios";

const KEY = "AIzaSyAa_yCfb_BUxf8trGtIQMmWnUNAvJCBak0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
