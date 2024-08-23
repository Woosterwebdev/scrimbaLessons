import React from "react"
import classnames from "classnames"

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({ children , variant }) {
    let styleClass = "banner"
    let variantClass = variant ? `${variant}` : ""
    const allClasses = classnames(styleClass, variantClass)
    return(
        <BannerContext.Provider value={{ variant }}>
            <div className={allClasses}>
                <img className="banner-icon" src={`./public/${variant}.png`} />
                <div>
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
    )
}

/*
 className="banner-children"
*/