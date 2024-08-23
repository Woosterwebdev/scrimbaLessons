import React from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle({ children }) {
    const { variant } = React.useContext(BannerContext)
    let variantClass = variant ? `banner-title banner-title-${variant}` : ""
    return (
        <h3 className={variantClass}>
            {children}
        </h3>
    )
}