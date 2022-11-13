import React from 'react';
import "./style.css";

const Homejumbotron = () => {
  return (
    <div>
       <div className='home-jumbotron'>
            <div className='left'>
                <div className='heading'>
                    Rent a <span className='purple'> Place</span> away from
                    <span className='purple'> Home</span> in the <span> Metaverse</span>
                </div>

                <p>
                    
                        we provide you access to luxury and affordable houses
                        in the metatverse, get a chance to turn your
                        imagination to reality at your comfort zone.
                    
                </p>

                <div className='button'>
                    <input type="text" placeholder='search for location'></input>
                    <button>Search</button>

                </div>

            </div>

            <div className='right'>
                <div className='first'>
                    <img src='Metabnb for frontend/house1.png' alt='house1'></img>
                    <img src='Metabnb for frontend/house2.png' alt='house2'></img>


                </div>

                <div className='second'>
                   <img src='Metabnb for frontend/house4.png' alt='house3'></img>
                   <img src='Metabnb for frontend/house3.png' alt='house4'></img>

                </div>

            </div>

        </div>
    </div>
  );
}

export default Homejumbotron;
