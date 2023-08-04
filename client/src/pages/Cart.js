import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import MainCart from '../components/MainCart'

function Cart() {
    return (
        <div className="max-w-[1530px] m-auto w-[100%]">
            <Navbar />
            <Announcement />
            <MainCart/>
            <Footer />
        </div>
    )
}

export default Cart