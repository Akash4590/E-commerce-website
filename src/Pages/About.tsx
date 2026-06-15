import React from 'react'
import AnnouncementBar from '../Components/Announcementbar'
import Navbar from '../Components/Navbar'
import Breadcrumb from '../Components/About/Breadcrumb'
import OurStory from '../Components/About/Ourstory'
import StatsSection from '../Components/About/Statssection'
import TeamSection from '../Components/About/Teamsection'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <div>
     <AnnouncementBar/>
     <Navbar/>   
<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <OurStory/>
       <StatsSection />
        <TeamSection />
        <Features />
       <Footer/>
    </div>
  )
}

export default About
