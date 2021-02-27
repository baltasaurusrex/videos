import axios from "axios";

const KEY = "AIzaSyBm385UjKCs3nTWxSwOFHx6n1zyftF2hb8"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})
