import React, {useState} from 'react';
import Modal from './Modal';
import {Link} from "react-router-dom"
import "./style.css";

const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const [mobileList, setMobileList] = useState(false);

    const toggler = (checker) =>{
        setDisplay(checker);
        
        
    }
     
    const buttonClick = () =>{
        setDisplay(true);
        
        
        
        
    }
  return (
    <div className='nav'>
     <div className='no-mobile'>

        
        <div className='navbar-wrapper'>
            <img src='Metabnb for frontend/metalogobgwhite.png' alt='logo'></img>
            <div className='nav-center'>
                <Link to="/">Home</Link>
                <Link to="/nfts">Place to stay</Link>
                <Link to="/">NFTs</Link>
                <Link to="/">Community</Link>
            </div>
            <button onClick={buttonClick}>Connect wallet</button>

        </div>
        <div className='modal-toggler' style={{display:display ? "block" : "none"}}>
            <Modal toggler={toggler}/>
        </div>
     </div>

        <div className='mobile'>
            <div className='navbar-wrapper'>
                 <img src='Metabnb for frontend/metalogobgwhite.png' alt='logo'></img>

                 <i style={{display:!mobileList?"block":"none"}} onClick={()=>setMobileList(true)} className='icofont-navigation-menu'></i>
                 <i className='icofont-close' style={{display:!mobileList?"none":"block"}}></i>

            </div>
            <div className='mobile-list' style={{display:mobileList?"flex":"none"}}>
                     <a href=''>Home</a>
                     <a href=''>Place to stay</a>
                     <a href=''>NFTs</a>
                     <a href=''>Community</a>
                     <button onClick={buttonClick}>Connect wallet</button>

            </div>
            <div className='modal-toggler' style={{display:display ? "block" : "none"}}>
               <Modal toggler={toggler}/>
            </div>
            

        </div>
      
    </div>
  );
}

export default Navbar;
