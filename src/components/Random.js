import React from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
const Random = () => {
  const { gif,fetchData,loading } = useGif();
  return (
    <div  className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
    <h1  className="text-3xl uppercase underline font-bold">A RANDOM GIFS</h1>
    {loading?(<Spinner/>):<img src={gif} width="450"/>}
    <button className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold" onClick={()=>fetchData()}>Generate</button>
    </div>
  )
}

export default Random;