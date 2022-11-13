import React from 'react';
import "./style.css";

const Stripe = () => {
  return (
    <div className='stripe'>
        <ul className='no-mobile'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantast city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li>
                
                    <span>Location</span>
                    <img src='Metabnb for frontend/vuesax/linear/setting-5.svg' alt='logo'></img>

                
            </li>
        </ul>
        <div className='mobile'>
            <select>
                <option>Location</option>
                <option>Restaurant</option>
                <option>Cottage</option>
                <option>Castle</option>
                <option>Fantast city</option>
                <option>Beach</option>
                <option>Carbins</option>
                <option>Off-grid</option>
                <option>Farm</option>
            </select>

        </div>
      
    </div>
  );
}

export default Stripe;
