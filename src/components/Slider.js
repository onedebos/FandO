import React from "react"

import "./Slider.css"
import Img from "gatsby-image"
import ScrollIntoView from "react-scroll-into-view"

const Slider = ({ info }) => {
  return (
    <div className="bg-slider min-h-screen min-w-full pb-5">
      <div
        style={{
          margin: `auto auto`,
          maxWidth: 1000,
        }}
      >
        <div className="text-white md:grid ml-4 p-8 md:p-0 md:ml-10 lg:ml-0 md:grid-cols-2 pt-4 md:pt-10 lg:pt-20">
          <div className="col-span-1 mt-8">
            <h1 className="text-3xl font-bold">
              We said <span className="text-yellow-500">Yes</span> to each
              other. <br />
              Now, we're so thrilled you said{" "}
              <span className="text-yellow-500">Yes</span> to joining us on our
              next journey together. 
            </h1>
            <p className="mt-4 text-yellow-500 text-medium pb-8">
              here's your official guide to everything you need to know about
              our wedding plans.
            </p>

            <a href="#">
              <button className="mt-2 sm:mt-8 bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-8 sm:px-2 lg:px-4 border-2 border-yellow-500 hover:border-transparent rounded-lg w-full sm:w-auto">
                Join virtually
              </button>
            </a>

            <button className="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded-lg md:ml-0 mt-2 md:mt-4 md:ml-4 w-full sm:w-auto ">
              <ScrollIntoView selector="#ourList">
                See our gifts register
              </ScrollIntoView>
            </button>
          </div>
          <div className="col-span-1 ml-12 hidden md:block md:pr-6 md:mt-6 lg:mt-0 lg:pr-0">
            <Img
              fluid={info.file.childImageSharp.fluid}
              className=""
              alt="Femi and Olamide Wedding logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
