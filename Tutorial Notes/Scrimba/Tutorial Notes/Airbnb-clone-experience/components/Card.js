import React from "react";
import '../index.css';

function Card(props){
    return(
        <div className="img-grid">
            <img src={props.image} alt="swimmer" className="card--image" />
            <div className="card--stats">
                <img src={require("../Images/Star 1.png")} alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
