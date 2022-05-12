import React from "react"

import "./Slider.css"
import Img from "gatsby-image"
import ScrollIntoView from "react-scroll-into-view"

const Slider = ({ info }) => {
  return (
    <div className="bg-slider min-h-full md:min-h-screen lg:min-h-screen min-w-full pb-5 md:pb-10">
      <div
        style={{
          margin: `auto auto`,
          maxWidth: 1000,
        }}
      >
        <div className="text-white md:grid ml-4 p-8 md:p-0 md:ml-10 lg:ml-0 md:grid-cols-2 pt-12 lg:pt-20 min-h-screen flex flex-col items-center text-center md:text-left">
          <div className="col-span-1 mt-64 md:mt-40 sm:pt-36 md:pt-40 lg:mt-40">
            <h1 className="text-3xl font-bold leading-tight md:leading-normal">
              Our baby is <span className="text-red-300">here</span>. <br />
              </h1>
              <h1 className="text-3xl font-bold leading-tight md:leading-normal">
              Our joy is <span className="text-red-300">full</span>. <br />
              </h1>
            

            <button className="bg-red-500 hover:bg-red-300 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-lg md:ml-0 mt-8 md:mt-4 md:ml-0 w-full sm:w-auto ">
              <ScrollIntoView selector="#ourList">
                See our gifts register
              </ScrollIntoView>
            </button>
            <button className="bg-red-500 hover:bg-red-300 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-lg md:ml-2 mt-2 md:mt-4 w-full sm:w-auto ">
              <ScrollIntoView selector="#message">
                Leave us a message
              </ScrollIntoView>
            </button>

            
          </div>
          <div className="col-span-1 ml-12 hidden md:block md:pr-6 md:mt-20 lg:mt-0 lg:pr-0">
            <Img
              fluid={info.logo.childImageSharp.fluid}
              className="md:hidden"
              alt="Femi and Olamide Wedding logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
