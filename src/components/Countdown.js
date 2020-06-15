import React, { useState } from "react"

const Countdown = () => {
  const [timeToShow, setTimeToShow] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getTimeLeft = () => {
    const countDownDate = new Date("June 19, 2020 11:00:25").getTime()

    setInterval(function () {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimeToShow({
        days,
        hours,
        minutes,
        seconds,
      })
    }, 1000)
  }

  getTimeLeft()

  return (
    <div className="thank-you text-center p-2 fixed w-full z-10 mb-4">
      <h1 className="countdown">
        It's&nbsp;
        <span className="font-semibold">
          {timeToShow.days} days {timeToShow.hours} hours {timeToShow.minutes}
          &nbsp;minutes and {timeToShow.seconds} seconds
        </span>{" "}
        till our day!
      </h1>
    </div>
  )
}

export default Countdown
