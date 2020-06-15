import React from "react"
import "./Note.css"

const Note = () => {
  return (
    <div className="success text-white pb-10 pt-10 mt-10">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
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
            placeholder="enter your email"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-bold mb-2 mt-4">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="enter your message"
            rows="5"
            className="bg-gray-400 font-semibold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <p className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 p-3 rounded-md text-black font-semibold w-full md:w-3/4 mt-4"
          >
            Send message
          </button>
        </p>
      </form>
    </div>
  )
}

export default Note
