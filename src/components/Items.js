import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import items from "../data/items.json"

const Items = ({ image }) => {
  const data = useStaticQuery(graphql`
    query Inline {
      file(relativePath: { eq: "image1.png" }, relativeDirectory: {}) {
        id
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
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
    <div className="divide-y divide-gray-300 divide-opacity-50 poppins font-bold">
      {items.map(item => {
        return (
          <div
            className="grid md:grid-cols-6 pt-6 pb-6"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <div className="md:col-span-1">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <div className="md:col-span-2 lg:col-span-2 ml-2">
              <p className="font-black note-text lg:text-xl">{item.itemName}</p>
              <p className="text-xs text-gray-600">1 UNIT - BLACK.</p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 ml-2 md:ml-0">
              N235,000
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <div className="min-w-full mt-4 md:mt-0">
                <a
                  className="list py-2 px-10 font-bold bg-gray-700 hover:bg-blue-700 text-white font-bold  rounded outline-none"
                  href="https://flutterwave.com/pay/femiolamideollf"
                  target="_blank"
                  rel="noreferrer"
                >
                  GIFT US
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Items
