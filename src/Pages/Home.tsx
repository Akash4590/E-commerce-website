import React from 'react'
import AnnouncementBar from '../Components/Announcementbar'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import FlashSales from '../Components/Flashsales'
import Categories from '../Components/Categories'
import BestSelling from '../Components/Bestselling'
import PromoBanner from '../Components/Promobanner'
import ExploreProducts from '../Components/Exploreproducts'
import NewArrival from '../Components/Newarrival'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
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
  <NewArrival/>
  <Features/>
  <Footer/>
    </div>
  )
}

export default Home
