import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Helmet } from 'react-helmet' 
export const About = () => {
  return (
    <>
       <Helmet>
        <title>Services - & More</title>
        <meta name="description" content="Discover the best services in your area. Browse profiles, chat, and book your experience." />
        <link rel="canonical" href="https://locandu.com/" />
      </Helmet>
     <Navbar/> 
     
     <div className="py-36 bg-gray-50 ">
  <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">
    About Locandu
  </h3>
  <h4 className="text-lg text-center text-gray-600 max-w-2xl mx-auto px-4">
    Locandu is dedicated to providing exceptional services with a focus on quality and customer satisfaction. Our mission is to create memorable experiences through personalized attention and care.
  </h4>
</div>
  <Footer/>
    </>
  )
}
