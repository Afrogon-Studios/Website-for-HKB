import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShopHero from '../components/ShopHero'
// import ShopProductCat from '../components/ShopProductCat'
import ShopCatalog from '../components/ShopCatalog'
import { useLocation } from 'react-router-dom'


function Shop() {
  const location = useLocation().pathname.split("/")[1]
  // console.log(location)
  return (
    <div className="max-w-[1530px] m-auto w-[100%]">
      <Navbar />
      <ShopHero location={location} />
      <ShopCatalog/>
      {/* <ShopProductCat /> */}
      <Footer />
    </div>
  )
}

export default Shop