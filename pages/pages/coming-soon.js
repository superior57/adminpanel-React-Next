import Centered from '../../src/layouts/centered'
import Link from 'next/link'
import {withRedux} from '../../src/lib/redux'
import React, {useEffect, useState} from 'react'

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = new Date('2020-06-04') - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <div className="w-1/4">
        <div className="flex flex-col items-center justify-center h-16 w-16">
          <div className="text-2xl mb-1 text-default">{timeLeft[interval]}</div>
          <div className="text-sm text-secondary mb-1">{interval}</div>
        </div>
      </div>
    )
  })

  return (
    <Centered>
      <p className="text-secondary mb-4 text-center">
        We are working on something awesome. Please return to our website in
      </p>

      <div className="flex flex-col items-center justify-center mb-4">
        <div className="flex w-full p-2">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>

      <div className="flex text-sm mb-4">
        <Link href="/">
          <a className="text-center w-full block px-4 py-2 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none">
            Go back
          </a>
        </Link>
      </div>
    </Centered>
  )
}

export default withRedux(ComingSoon)
