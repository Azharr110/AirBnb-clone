import React from "react";
import imgGroup from "../Assets/Group.png"

export default function HeroComponent(){
 return(
    <section className="hero">
        <img src={imgGroup} className="hero--photo"></img>
        <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
 )
}