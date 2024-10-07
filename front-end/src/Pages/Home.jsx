// Home.js
import React from 'react';
import Hero from '../Components/Hero/Hero'
import TopSellers from '../Components/TopSellers/TopSellers';
import LocationContact from '../Components/LocationContact/LocationContact';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Hero/>
      <TopSellers/>
      <LocationContact/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Home;
