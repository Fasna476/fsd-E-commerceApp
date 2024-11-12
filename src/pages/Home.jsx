import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import Shopbycategory from '../components/Shopbycategory';

const Home = () => {
  console.log("HomePage rendered");
  return (
    <div>
        <Hero/>
        <Shopbycategory/>
        
        <Footer/>

    </div>
  )
}

export default Home