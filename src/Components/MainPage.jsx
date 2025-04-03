import React, { useState } from 'react'
import MealCards from './MealCards'

const MainPage = () => {
  const [data,setData] = useState()
  const [search,setSearch] = useState()
  const handleInput = (e) => {
    setSearch(e.target.value)

  }
  const MyFun = async () =>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json()
    setData(jsonData.meals);
    // console.log(data);
    
    
  }
  return (
    <>
    <div className='container p-5'>
      <div className='searchBar flex itemes-center justify-center gap-2 text-center'>
        <input onChange={handleInput} className='w-[300px]' type="text" placeholder='Enter Dishe' />
        <button onClick={MyFun} className='px-3 py-2 bg-blue-400 text-white rounded-md '>Submit</button>
      </div>
      <div>
        <MealCards detail={data}/>
      </div>

    </div>
    </>
  )
}

export default MainPage;