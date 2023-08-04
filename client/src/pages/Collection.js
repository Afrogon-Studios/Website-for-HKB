import React from 'react'
import Navbar from '../components/Navbar'
import ShopHero from '../components/ShopHero'
import { useLocation } from 'react-router-dom'
import ShopProductCat from '../components/ShopProductCat'
import Footer from '../components/Footer'

function Collection() {
  const location = useLocation().pathname.split("/")[1]
  console.log(location)
  return (
    <div className="max-w-[1530px] m-auto w-[100%]">
      <Navbar />
      <ShopHero />
      <ShopProductCat />
      <Footer />
    </div>
  )
}

export default Collection