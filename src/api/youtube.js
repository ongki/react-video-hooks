import axios from "axios";

const API_KEY = 'AIzaSyD9yYduUEwLFCDdefgOAq0X98GXGcaYzZo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 25,
    key: API_KEY
  }
});