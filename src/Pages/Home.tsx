import React from 'react'
import AnnouncementBar from '../Components/Announcementbar'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import FlashSales from '../Components/Flashsales'
import Categories from '../Components/Categories'
import BestSelling from '../Components/Bestselling'
import PromoBanner from '../Components/Promobanner'
import ExploreProducts from '../Components/Exploreproducts'

function Home() {
  return (
    <div>
      <AnnouncementBar/>
      <Navbar/>
      <Hero/>
  <FlashSales/>
  <Categories/>
  <BestSelling/>
  <PromoBanner/>
  <ExploreProducts/>
    </div>
  )
}

export default Home
