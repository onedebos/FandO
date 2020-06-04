import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/layout"
import Img from "gatsby-image"
import Items from "../components/Items"
import items from "../data/items.json"
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
    <div>
      <div className="left-bg md:fixed left note p-16 sm:p-20 md:p-10 lg:p-20 md:min-h-screen min-h-screen">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="md:mt-10"
          alt="Femi and Olamide Wedding logo"
        />
        <p className="text-center mt-2 md:mt-10 note-text text-4xl lg:text-3xl">
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
            <button className="block md:hidden font-bold note-text text-2xl revealList m-auto outline-none">
              <span className="text-bg rounded-lg no-outline">
                See our list
              </span>
            </button>
          </ScrollIntoView>
        </div>
      </div>
      <div className="right p-4 rightSide min-h-screen hero" id="ourList">
        <div className="bg-white m-1 lg:m-24 p-6 rounded-lg list mb-20">
          <p className="font-bold text-2xl lg:text-3xl">Our list</p>
          <p className="mt-0 pt-0">
            {items.length} items currently in the list.
          </p>
          <hr className="mt-4" />
          <div className="mt-8 font-semibold text-gray-500 list lg:grid-cols-4  grid-cols-6 hidden md:grid ">
            <div className="md:col-span-3 lg:col-span-2 ">ITEM</div>
            <div className="md:col-span-1 lg:col-span-1">PRICE</div>
            <div className="md:col-span-2 lg:col-span-1"></div>
          </div>
          <Items />
        </div>
        <footer className="note-text">
          <div className="ml-6 md:ml-32">
            Built with{" "}
            <span className="bg-red-500 text-white px-2 text-xl">love</span> for
            Femi and Olamide.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default IndexPage
