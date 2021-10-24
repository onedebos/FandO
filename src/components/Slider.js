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
        <div className="text-white md:grid ml-4 p-8 md:p-0 md:ml-10 lg:ml-0 md:grid-cols-2 pt-12 lg:pt-20">
          <div className="col-span-1 mt-10 md:mt-40 sm:pt-36 md:pt-40 lg:mt-40">
            {/* <div className= 'h-64 md:hidden'></div> */}
            <h1 className="pt-64 pb-3 md:pb-0 md:pt-0 text-xl md:text-3xl font-bold leading-tight md:leading-normal">
              We said <span className="text-yellow-gold">Yes</span> to each
              other. <br />

            </h1>
            <h2 className = 'md:pb-3 pb-10 text-xl md:text-3xl font-bold leading-tight md:leading-normal'> <span>Now, we're so thrilled you said</span>{" "}
              <span className="text-yellow-gold">Yes</span> to joining us on our
              next journey together.</h2>
            <p className="hidden md:block mt-4 text-yellow-gold text-medium pb-4 md:pb-8">
              here's your official guide to everything you need
              <br /> to know about our wedding plans.
            </p>

            <a
              href="https://meet.google.com/hzf-gsco-hjo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-1 sm:mt-8 bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-8 sm:px-2 lg:px-4 border-2 border-yellow-gold hover:border-transparent rounded-lg w-full  md:pr-14 sm:w-auto">
                Join event virtually
              </button>
            </a>

            <button className="bg-transparent border-yellow-gold hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded-lg md:ml-0 mt-2 md:mt-4 md:ml-4 w-full sm:w-auto ">
              <ScrollIntoView selector="#ourList">
                See our gifts register
              </ScrollIntoView>
            </button>
            <button className="bg-transparent border-yellow-gold hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded-lg md:ml-0 mt-2 md:mt-4 w-full sm:w-auto ">
              <ScrollIntoView selector="#message">
                Leave us a message
              </ScrollIntoView>
            </button>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendar.google.com/calendar?cid=b2xhbWlkZWZlbWkxMjA5QGdtYWlsLmNvbQ"
            >
              <button className="bg-transparent border-yellow-gold hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded-lg md:ml-0 mt-2 md:mt-4 w-full sm:w-auto md:ml-4 lg:ml-4">
                Add to calendar
              </button>
            </a>
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
