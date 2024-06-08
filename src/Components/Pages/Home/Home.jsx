import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'

const Home = () => {

  const[Category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu Category={Category} setCategory={setCategory}/>
      <FoodDisplay Category={Category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
