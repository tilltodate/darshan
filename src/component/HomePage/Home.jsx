import React from "react";
import NavBar from "../Navbar/NavBar";
import HeroSection from "./component/HeroSection";

const Home = () =>{
    return(
        <div className="flex-1"> 
            <NavBar/>
            <div className="flex">
                <HeroSection/>
            </div>
        </div>
    )
};

export default Home;