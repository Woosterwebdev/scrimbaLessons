import React from "react"
import { useParams } from 'react-router-dom'

export default function HostVanDetail() {
    /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */
    const [van, setVan] = React.useState(null)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [])
    
    if (!van) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <img src={van.imageUrl} />
            <div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
        </div>
    )
}
