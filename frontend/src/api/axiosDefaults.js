import axios from "axios";

// axios.defaults.baseURL = 'https://django-rest-framwork-first-3168ada70b98.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();