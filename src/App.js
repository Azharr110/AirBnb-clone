import React from "react";
import Navbar from "./component/Navbar";
import HeroComponent from "./component/HeroComponent";
import Card from "./component/Card";
import data from "./data"
import props from "./component/Props";




export default function App(){

const  cards = data.map(item => {
    return (
        <Card  
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        // discription={item.description}
        price={item.price}
    />
    )
})

    return (
        <div>
            <Navbar/>
            <HeroComponent/>
            {/* <Card/> */}
            
            
        <section className="cards-list">
        {cards}
        </section>


        </div>
    )
}