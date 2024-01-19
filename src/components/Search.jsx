import React,{useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'
import { useResultContext } from '../context/Resultcontextprovider'
function Search() {
  const [text,setText]=useState('yuvraj')
  const {setSearchTerm}=useResultContext()
  const {debouncedValue}=useDebounce(text,300)

  useEffect(()=>{
    console.log(debouncedValue);
    // if(debouncedValue) setSearchTerm(debouncedValue)
    setSearchTerm(text)
  },[text])
  return (
    <div className='relative sm:ml-72 sm:mt-10 mt-3'>
      <input type="text"
      value={text} 
      placeholder='Search google'
      onChange={(e)=>{
      setText(e.target.value)
      }}
      className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg' />
    </div>
  )
}

export default Search
