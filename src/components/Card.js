import React from "react"
import icon from "../images/googlemaps-icon.png"

export default function Card(props) {

    let countryName = props.location.toUpperCase()
   
    return (
        
        <>
        <section>
        <img className="img" src={props.imageUrl} alt={props.title} />
        <div className="card">
            <div className="geo">
                <img src={icon} alt="icon" className="geo-icon" /> <span className="country">{countryName}</span>
                <span><a href={props.googleMapsUrl} >View on Google Maps</a></span>
            </div>
            <h1>{props.title}</h1>
            <div className="dates">{props.startDate} - {props.endDate}</div>
            <p>{props.description}</p>
        </div>
        <hr />
       </section>
       </>
    )
}