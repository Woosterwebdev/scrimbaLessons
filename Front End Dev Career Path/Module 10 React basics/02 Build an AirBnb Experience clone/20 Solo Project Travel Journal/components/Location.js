import React from "react"

export default function Location() {
    return (
        <section>
            <div className="location--card">
                <img src="../images/mount-fuji.png" alt="Image of Mount Fuji" className="location--img" />
                <div className="location--information">
                    <div className="geo-location">
                        <img src="../images/location-pin.png" alt="location pin" className="location-pin" />
                        <p className="location--country">Japan</p>
                        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                    <h2 className="location--title">Mount Fuji</h2>
                    <h3 className="location--dates">12 Jan, 2021 - 24 Jan, 2021</h3>
                    <p className="location--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </section>
    )
}
                // <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"></a>