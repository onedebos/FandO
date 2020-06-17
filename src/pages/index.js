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
import HoldMe from "../components/HoldMe"

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
      logo: file(relativePath: { eq: "OWedding.png" }, relativeDirectory: {}) {
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
        <title>Femi ❤️'s Olamide</title>
        <link rel="canonical" href="https://olamidefemi.com" />
      </Helmet>
      <Layout>
        <Slider info={info} />
        <HoldMe classToUse={"hold-me"} />
        <GiftRegistry />
        <ListHeader items={info.allItemsJson.nodes} />
        <Items items={info} />
        <HoldMe classToUse={"hold-out"} />
        <Note />
      </Layout>
    </div>
  )
}

export default IndexPage
