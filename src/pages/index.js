import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/layout"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import Items from "../components/Items"
import GiftRegistry from "../components/GiftRegistry"
import ListHeader from "../components/ListHeader"

const IndexPage = () => {
  const info = useStaticQuery(graphql`
    query Inline {
      allItemsJson {
        nodes {
          id
          itemName
          unitAndColor
          price
          paymentUrl
          imageUrl
        }
      }
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
      <Layout>
        <Slider info={info} />
        {/* <div
          className="hiddden md:block p-10"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <img src="https://res.cloudinary.com/onedebeos/image/upload/e_grayscale,f_auto,q_auto,r_9/v1592206601/femi/WEDDING-MOMENT-CLASSIC-RING-EXCHANGE-004993-Custom_jad77i.jpg" />
        </div> */}
        <GiftRegistry />
        <ListHeader items={info.allItemsJson.nodes} />
        <Items items={info} />
      </Layout>
    </div>
  )
}

export default IndexPage
