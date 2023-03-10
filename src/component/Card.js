import React from "react";
import imgStar from "../Assets/Star.png"

export default function Props({coverImg, rating, reviewCount, location, title, price, discription}){
  return(
    <div className="card">

        
        <img src={coverImg} className="card--image" />
        <div className="card--stats">
            <img src={imgStar} className="card--star" />
            <span>{rating}</span>
            <span className="gray">({reviewCount})</span>
            <span className="gray">  • {location}</span>
        </div>
        <p className="card--title">{title}</p>
        {/* <h6>{discription}</h6> */}
        <p className="card--price"> <span className="bold">From {price}</span>  / person</p>
        
    </div>
  )
}

{/* <div className="card">
<img src={imgSwim} className="card--image" />
<div className="card--stats">
    <img src={imgStar} className="card--star" />
    <span>5.0</span>
    <span className="gray">(6) • </span>
    <span className="gray">USA</span>
</div>
<p>Life Lessons with Katie Zaferes</p>
<p><span className="bold">From $136</span></p>
</div> */}

//
// import React from "react";
// import imgSwim from "../Assets/Swimming.png"
// import imgWedding from "../Assets/wedding.png"
// import imgBike from "../Assets/mountain-bike.png"
// import imgStar from "../Assets/Star.png"
// import Props from "./Props";

// export default function Card(){
//     return(

//         <div>
//         <Props 
//         img={imgSwim}
//         rating="5.0"
//         reviewCount={6}
//         country="USA"
//         title="Life Lessons with Katie Zaferes"
//         price={136}

//         />

// <Props 
//         img={imgWedding}
//         rating="5.0"
//         reviewCount={30}
//         country="USA"
//         title="Learn wedding photography
//         "
//         price={125}

//         /> <Props 
//         img={imgBike}
//         rating="5.0"
//         reviewCount={6}
//         country="USA"
//         title="Group Mountain Biking"
//         price={50}

//         />

// </div>
//     )
// }