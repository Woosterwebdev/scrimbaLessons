import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""} // set state as an object.
    )
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => { // retain previous state
            return {
                ...prevFormData,
                [event.target.name]: event.target.value //use [] on keys to allow dot notation
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}
