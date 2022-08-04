import axios from 'axios';

const API_KEY = '2ecad470b2mshbd53d9dcb94e982p15f682jsn9180dce375aa';
const baseUrl = 'spotify23.p.rapidapi.com/';

const tmdb = axios.create({
  baseURL: 'https://' + baseUrl,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': baseUrl
  }
});

export default tmdb;