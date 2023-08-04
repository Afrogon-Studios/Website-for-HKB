import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import OtherCategories from "../components/OtherCategories";
import ProductsCat from "../components/ProductsCat";
import Trending from "../components/Trending";
import Testimonials from "../components/Testimonials";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="max-w-[1530px] m-auto w-[100%]">
      <Announcement />
      <Navbar />
      <Hero />
      <Categories />
      <OtherCategories />
      <ProductsCat />
      <Trending/>
      <Testimonials/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Home;
