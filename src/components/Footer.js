import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-first no-mobile'>
                    <div>
                        <img src='Metabnb for frontend/whitelogo.png' alt='logo'></img>
                    </div>
                   

                    <div>
                         <div className='icons'>
                        
                               <i className='icofont-facebook'></i>
                               <i className='icofont-instagram'></i>
                               <i className='icofont-twitter'></i>


                        </div>
                        <div>
                          <i className='icofont-copyright'></i>
                          <span>2022 Metabnb</span>


                        </div>

                    </div>

                    

      </div>


      <div className='second'>
                <h3>Community</h3>
                <ul>
                    <li><a href=''>NFT</a></li>
                    <li><a href=''>Tokens</a></li>
                    <li><a href=''>Landlords</a></li>
                    <li><a href=''>Discord</a></li>
                </ul>
      </div>

      <div className='second'>
                <h3>Places</h3>
                <ul>
                    <li><a href=''>Cast</a></li>
                    <li><a href=''>Farm</a></li>
                    <li><a href=''>Beach</a></li>
                    <li><a href=''>Learn More</a></li>
                </ul>
      </div>


      <div className='second'>
                <h3>About Us</h3>
                <ul>
                    <li><a href=''>Roadmap</a></li>
                    <li><a href=''>Creator</a></li>
                    <li><a href=''>Career</a></li>
                    <li><a href=''>Contact Us</a></li>
                </ul>
      </div>


      <div className='footer-first mobile'>
                    <div>
                        <img src='Metabnb for frontend/whitelogo.png' alt='logo'></img>
                    </div>
                   

                    <div className='lefty'>
                         <div className='icons'>
                        
                               <i className='icofont-facebook'></i>
                               <i className='icofont-instagram'></i>
                               <i className='icofont-twitter'></i>


                        </div>
                        <div>
                          <i className='icofont-copyright'></i>
                          <span>2022 Metabnb</span>


                        </div>

                    </div>

                    

      </div>
    </div>
  );
}

export default Footer;
