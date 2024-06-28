import React from "react"

export default function Form() {
    const [input, setInput] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    console.log(input)
    
    function handleChange(event) {
        setInput({
            name: event.target.name,
            value: event.target.value
            })
    }
    
    return (
        <form>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )
}


/* Instructor's solution but Bob even points out it is not DRY.

import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")*/
    /**
     * Challenge: Track the applicant's last name as well
     */
    /*
    console.log(firstName, lastName)
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}*/
