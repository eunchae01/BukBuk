import React from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import Slide from "../slide/Slide";

function Home({authenticated , logout}){
    
    return(
        <>
        <Nav authenticated={authenticated} logout={logout} />
        <Menu/>
        <Slide/>
        </>
    );
};

export default Home;

