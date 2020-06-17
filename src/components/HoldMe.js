import React from "react"
import "./HoldMe.css"
import Img from "gatsby-image"

const HoldMe = ({ classToUse }) => {
  return <div className={`${classToUse} min-h-screen pt-40 `}></div>
}

export default HoldMe
