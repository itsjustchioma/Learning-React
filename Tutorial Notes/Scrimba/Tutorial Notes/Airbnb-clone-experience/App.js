import React from "react";
import '../index.css';
import data from "../data";

function Card(props){
    let badgeText;
    return(
        <div className="card">
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src= {props.img} alt={props.alt} className="card--image" />
            <div className="card--stats">
                <img src={require("../Images/Star 1.png")} alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
