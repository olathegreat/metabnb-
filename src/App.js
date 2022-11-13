import React from "react";
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
                    {/* <Navbar/> */}
                    {/* <Stripe/> */}
                    {/* <Modal/> */}
                    {/* <Footer/> */}
                    {/* <Home/> */}
                    <Nft/>
                </div>
            )
        }
}

export default App;