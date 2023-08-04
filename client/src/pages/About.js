import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Abouts from '../components/Abouts'
import AboutHero from '../components/AboutHero'
import AboutStatement from '../components/AboutStatement'

function About() {
    return (
        <div className="max-w-[1530px] m-auto w-[100%]">
            <Navbar />
            <AboutHero/>
            <Abouts/>
            <AboutStatement/>
            <Testimonials />
            <Content />
            <Footer />
        </div>
    )
}

export default About