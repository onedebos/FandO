import React, { useState } from "react"
import "./Note.css"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Note = () => {
  const [submitted, setSubmitted] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setSubmitted("Thank you for your kind words!"))
      .catch(error => alert(error))

    e.preventDefault()
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
        onSubmit={handleSubmit}
        name="contact"
        className="container m-auto p-8 md:p-0 max-w-md lg:max-w-lg pt-20"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div
          className="text-center text-sm md:text-base"
          data-sal="slide-up"
          data-sal-delay="5"
          data-sal-easing="ease"
        >
          Want to tell us something?
        </div>
        <div
          className="text-center text-2xl font-semibold"
          data-sal="slide-up"
          data-sal-delay="5"
          data-sal-easing="ease"
        >
          Leave us a message
        </div>
        <div
          className="mb-4 mt-4"
          data-sal="slide-up"
          data-sal-delay="5"
          data-sal-easing="ease"
        >
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Your Name:{" "}
          </label>
          <input
            onChange={({ target }) => setName(target.value)}
            type="text"
            name="name"
            value={name}
            placeholder="tell us your name"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          />
        </div>
        <div data-sal="slide-up" data-sal-delay="5" data-sal-easing="ease">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="tell us your email"
            className="bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
          />
        </div>

        <div data-sal="slide-up" data-sal-delay="5" data-sal-easing="ease">
          <label
            htmlFor="message"
            className="block text-gray-300 text-sm font-bold mb-2 mt-4"
          >
            Message:
          </label>
          <textarea
            name="message"
            placeholder="say something nice...."
            rows="5"
            onChange={({ target }) => setMessage(target.value)}
            value={message}
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
      </form>
    </div>
  )
}

export default Note
