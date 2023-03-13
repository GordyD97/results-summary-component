import React from "react";
import "../App.css";
import data from "../data.json";

export default function Summary(props) {
    return (
        <>
            <ul className="">
                <li className={props.background}>
                    <span className="catagory">
                        <img src={`${props.icon}`} alt={`${props.category} icon`} />
                        {props.category}
                    </span>
                    <span className="score">{props.score}<span className="result-of100"> / 100</span></span>
                </li>
            </ul>
        </>
    )
}