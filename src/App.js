import React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Stripe from "./components/Stripe";
import "./components/style.css";
import Home from "./pages/Home";
import Nft from "./pages/Nft";



class App extends React.Component{
        render(){
            return(
                <div className="app">

                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/nfts" element={<Nft/>}/>

                        
                    </Routes>
                    {/* <Navbar/> */}
                    {/* <Stripe/> */}
                    {/* <Modal/> */}
                    {/* <Footer/> */}
                    {/* <Home/> */}
                    {/* <Nft/> */}
                </div>
            )
        }
}

export default App;