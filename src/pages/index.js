import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/layout"
import Img from "gatsby-image"
import Items from "../components/Items"
import { Link } from "gatsby"
import ScrollIntoView from "react-scroll-into-view"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "OWedding.png" }, relativeDirectory: {}) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <div className="grid md:grid-cols-4">
      <div className="md:col-span-1 note p-16 sm:p-20 md:p-10 lg:p-20 md:min-h-screen min-h-screen">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="md:mt-10"
          alt="Femi and Olamide Wedding logo"
        />
        <p className="text-center mt-10 sm:mt-4 md:mt-10 note-text text-4xl lg:text-3xl">
          {" "}
          Thank you
        </p>
        <p className="text-center playfair italic text-md lg:text-xl">
          For taking the time to look through our Wedding register and for
          supporting us through it all.
        </p>
        <p className="note-text text-center italic text-lg mt-6 md:mt-6 lg:mt-4">
          {" "}
          ~ F and O
        </p>

        <div className="mt-6 text-center">
          <ScrollIntoView selector="#ourList">
            <button className="block md:hidden font-bold note-text text-2xl revealList m-auto">
              See our List
              {/* <span className="font-semibold list text-xl"> */}
              {/* <svg class="arrows">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg> */}
              {/* </span> */}
            </button>
          </ScrollIntoView>
        </div>
      </div>
      <div className="md:col-span-3 p-4 rightSide" id="ourList">
        <div className="bg-white m-1 lg:m-24 p-6 rounded-lg list">
          <p className="font-bold text-2xl lg:text-3xl">Our list</p>
          <p className="mt-0 pt-0">30 items currently in the list.</p>
          <hr className="mt-4" />
          <div className="mt-8 font-semibold text-gray-500 list  grid-cols-6 hidden md:grid ">
            <div className="md:col-span-3 lg:col-span-2 ">ITEM</div>
            <div className="md:col-span-1 lg:col-span-1">PRICE</div>
            <div className="md:col-span-2 lg:col-span-1"></div>
          </div>

          <Items />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
