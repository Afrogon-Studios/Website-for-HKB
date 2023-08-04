import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import DescComp from '../components/DescComp'

function Description() {
    return (
        <div className="max-w-[1530px] m-auto w-[100%]">
            <Navbar />
            <Announcement />
            <DescComp/>
            <Footer />
        </div>
    )
}

export default Description