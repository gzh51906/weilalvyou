import axios from 'axios';

let WeiLa = axios.create({
    baseURL: 'http://localhost:1966/'
})
export default WeiLa;
