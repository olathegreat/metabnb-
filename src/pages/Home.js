import React, {useState} from 'react';
import Footer from '../components/Footer';
import Homejumbotron from '../components/Homejumbotron';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import "../components/style.css"
const Home = () => {
    const[modalChecker,setModalChecker] = useState(false);



  return (
    <div className='homepage' style={{overflow: modalChecker && "hidden"}}>
        
           <Navbar/>



       
           <Homejumbotron/>



       <div className='logo-stripe'>
        
           <img src='Metabnb for frontend/coin.svg'></img>

        
        
               <img src='Metabnb for frontend/metamask.svg'></img>



        
           <img src='Metabnb for frontend/Frame 4041.svg'></img>


    

          

       </div>
       
       <Products/>

       <div className='lower-jumbotron'>
          <div className='lower-jumbotron-left'>
            <h1>
                Metabnb NFTs
            </h1>
            <p>
                Discover our NFT gift cards collection. Loyal
                customers gets amazing gift cards which alert
                traded as NFTs. These NFTs give our customer
                access to loads of our exclusive services.
            </p>
            <button>Learn more</button>
          </div>
          <div className='lower-jumbotron-right'>
            <img src='Metabnb for frontend/frame 59546-1.png'></img>

          </div>
         

       </div>
       

        <Footer/>
      
    </div>
  );
}

export default Home;
