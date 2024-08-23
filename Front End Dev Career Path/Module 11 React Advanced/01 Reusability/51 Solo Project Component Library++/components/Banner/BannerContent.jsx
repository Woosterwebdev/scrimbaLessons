import React from "react"
import { BannerContext } from "./Banner"

export default function BannerContent({ children }) {
    const { variant } = React.useContext(BannerContext)
    let variantClass = variant ? `banner-content banner-content-${variant}` : ""
    return (
        <div className={variantClass}>
            {children}
        </div>
    )
}