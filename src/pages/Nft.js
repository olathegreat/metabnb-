import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products2 from '../components/Products2';
import Stripe from '../components/Stripe';
import "../components/style.css"

const Nft = () => {
  return (
    <div className='nft'>
        <Navbar/>
        <Stripe/>
        <Products2/>
        <div className='footer-nft'>
              <Footer/>

        </div>
      
    </div>
  );
}

export default Nft;
