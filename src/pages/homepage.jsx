import React from 'react'
import Navbar from '../component/navbar'
import HeroSlider from '../component/imgslider'
import TextSlider from '../component/textslider'
import MyImage from '../component/img2'
import HeroVideo from '../component/video'
import Footer from '../component/footer'
import ProductGrid from '../products/product'


function Homepage() {
  return (
    <div>
        
        <HeroSlider /><br/>
        <TextSlider /><br/>
        <ProductGrid/>
        <MyImage />
        <HeroVideo />

    </div>
  )
}

export default Homepage