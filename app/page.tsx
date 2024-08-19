import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import Footer from './section/Footer'
import NoticeBoard from './section/Notice'

 const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NoticeBoard />
      <Footer />
    </div>
  )
}

export default page;