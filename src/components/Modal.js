import React, {useState} from 'react';

import "./style.css"

const Modal = ({toggler}) => {
    const [display, setDisplay] = useState(true);

    const click = () =>{
        setDisplay(false);
        toggler(false);
    }
  return (
    <div className='modal'>
        <div className='modal-wrapper'>
            <div className='head'>
                <h3>Connect Wallet</h3>
                <span className='cancel' onClick={click}>X</span>
            </div>
            <hr></hr>
            <div className='bottom'>
             <h5>choose your preferred wallet</h5>
             <div className='select'>
                <div className='select-wrapper'>
                    <span className='left'><img src='Metabnb for frontend/metamasklogo.png'></img><h2>Metamask</h2></span>
                    <span><i className='icofont-rounded-right'></i></span>
                </div>
             </div>


             <div className='select'>
                <div className='select-wrapper'>
                    <span className='left'><img src='Metabnb for frontend/walletconnectlogo.png'></img><h2>Metamask</h2></span>
                    <span><i className='icofont-rounded-right'></i></span>
                </div>
             </div>
            </div>

        </div>
      
    </div>
  );
}

export default Modal;
