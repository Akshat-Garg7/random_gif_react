import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = () => {
    
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    async function fetchData(tag)
    {
        setLoading(true);
        const {data}=await axios.get(`${url}&tag=${tag}`);
        
        const imageSource=data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[] )
    return {gif,fetchData,loading};
}

export default useGif