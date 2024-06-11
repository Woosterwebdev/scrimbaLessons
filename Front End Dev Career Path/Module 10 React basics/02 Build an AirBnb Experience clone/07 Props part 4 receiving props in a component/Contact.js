// import React from "react"

// export default function Contact(whatever) {
//     console.log(whatever)
//     return (
//         <div className="contact-card">
//             <img src="./images/mr-whiskerson.png"/>
//             <h3>Mr. Whiskerson</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>(212) 555-1234</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>mr.whiskaz@catnap.meow</p>
//             </div>
//         </div>
//     )
// }

/* It console logged four times because App.js called 
Contact four times */

// import React from "react"

// export default function Contact(props) {
//     /**
//      * Challenge: Fix the code below to use the `props`
//      * object values in place of the hardcoded values below
//      */
//     return (
//         <div className="contact-card">
//             <img src="./images/mr-whiskerson.png"/>
//             <h3>Mr. Whiskerson</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>(212) 555-1234</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>mr.whiskaz@catnap.meow</p>
//             </div>
//         </div>
//     )
// }

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/

import React from "react"

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/