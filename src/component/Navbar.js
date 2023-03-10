import React from "react";
import img from "../Assets/airbnb.png"

export default function Navbar(){
    return (
        <nav>
            <img src={img}  className="nav--logo"></img>
          
        </nav>
    )
}