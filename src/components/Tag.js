import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Tag = () => {
  const [tag,setTag]=useState("Dog");
  const { gif, loading, fetchData } = useGif();

  return (
    <div>
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {loading?(<Spinner/>):<img src={gif} width="450"/>}
      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event)=>setTag(event.target.value)} value={tag}></input>
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  )
}

export default Tag;
