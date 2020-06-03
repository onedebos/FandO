import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="divide-y divide-gray-300 divide-opacity-50 poppins">
      <div className="grid md:grid-cols-6 mt-8 pb-6">
        <div className="md:col-span-1">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="md:col-span-2 lg:col-span-2 ml-2">
          <p className="font-black note-text">HISENSE 65inch TV w89289</p>
          <p className="text-xs text-gray-600">1 UNIT - BLACK.</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1 ml-2 md:ml-0">N235,000</div>
        <div className="md:col-span-2 lg:col-span-2">
          <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 min-w-full lg:min-w-0 lg:px-8 rounded ">
            GIFT US
          </button>
        </div>
      </div>
      {/* START OF COPY PASTE */}
      <div className="grid md:grid-cols-6 pt-6 pb-6">
        <div className="md:col-span-1">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="md:col-span-2 lg:col-span-2 ml-2">
          <p className="font-bold note-text">HISENSE 65inch TV w89289</p>
          <p className="text-xs text-gray-600">1 UNIT - BLACK.</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1 ml-2 md:ml-0">N235,000</div>
        <div className="md:col-span-2 lg:col-span-2">
          <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded min-w-full lg:min-w-0">
            GIFT US
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-6 pt-6 pb-6">
        <div className="md:col-span-1">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="md:col-span-2 lg:col-span-2 ml-2">
          <p className="font-bold note-text">HISENSE 65inch TV w89289</p>
          <p className="text-xs text-gray-600">1 UNIT - BLACK.</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1 ml-2 md:ml-0">N235,000</div>
        <div className="md:col-span-2 lg:col-span-2">
          <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded min-w-full lg:min-w-0">
            GIFT US
          </button>
        </div>
      </div>
    </div>
  )
}

export default Items
