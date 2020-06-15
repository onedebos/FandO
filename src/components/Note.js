import React, { useState } from "react"
import "./Note.css"

const Note = () => {
  const [submitted, setSubmitted] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted("Thank you for your kind words!")
  }

  if (submitted) {
    return (
      <div className="pb-10 m-auto bg-black text-white text-center pt-20 success">
        <p>We have received your message.</p>
        <p className="text-2xl font-bold mb-8">
          Thank you for your kind words.
        </p>
      </div>
    )
  }
  return (
    <div className="success text-white pb-10 pt-10 mt-10">
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
        className="container m-auto p-8 md:p-0 max-w-md lg:max-w-lg pt-20"
      >
        <div className="text-center text-sm md:text-base">
          Want to tell us something?
        </div>
        <div className="text-center text-2xl font-semibold">
          Leave us a message
        </div>
        <div className="mb-4 mt-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Your Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="what is your e-mail?"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-bold mb-2 mt-4">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="say something nice...."
            rows="5"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          ></textarea>
        </div>
        <p className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-yellow-500 p-3 rounded-md text-black font-semibold w-full md:w-3/4 mt-4"
          >
            Send message
          </button>
        </p>
        {/* <p className="text-center mt-4 font-semibold">
          {submitted ? submitted : <> </>}
        </p> */}
      </form>
    </div>
  )
}

export default Note
