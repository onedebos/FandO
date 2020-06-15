import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const success = () => {
  return (
    <Layout>
      <div className="min-h-screen m-auto bg-black text-white text-center pt-20 success">
        <p className="text-2xl font-bold pt-20 mb-8">
          Thank you for your kind words.
        </p>
        <Link
          to="/"
          className="p-3 rounded-sm bg-yellow-500 text-black font-medium"
        >
          {" "}
          Back to our page
        </Link>
      </div>
    </Layout>
  )
}

export default success
