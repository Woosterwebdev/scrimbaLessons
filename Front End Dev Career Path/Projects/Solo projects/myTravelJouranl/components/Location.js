import React from "react"

export default function Location(props) {
    return (
        <div>
            <div className="location--card">
                <img src={`../images/${props.imageUrl}`} alt="Image of location" className="location--img" />
                <div className="location--information">
                    <div className="geo-location">
                        <img src="../images/location-pin.png" alt="location pin" className="location-pin" />
                        <p className="location--country">{props.location.toUpperCase()}</p>
                        <a href={props.googleMapsUrl} className="location--link">View on Google Maps</a>
                    </div>
                    <h2 className="location--title">{props.title}</h2>
                    <h3 className="location--dates">{props.startDate} - {props.endDate}</h3>
                    <p className="location--description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}