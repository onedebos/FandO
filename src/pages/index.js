import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/layout"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import Items from "../components/Items"
import GiftRegistry from "../components/GiftRegistry"
import ListHeader from "../components/ListHeader"
import Note from "../components/Note"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Olamide and Femi</title>
        <link rel="canonical" href="https://olamidefemi.com" />
      </Helmet>
      <Layout>
        <Slider info={info} />
        <GiftRegistry />
        <ListHeader items={info.allItemsJson.nodes} />
        <Items items={info} />
        <Note />
      </Layout>
    </div>
  )
}

export default IndexPage
