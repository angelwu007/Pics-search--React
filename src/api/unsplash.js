import axios from 'axios';

// axios.create() method let us customize our api request 
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 256003122cac2498549782b3da0f5c759f4735cebad8d827d8fb32c0faed0243'
    }
})