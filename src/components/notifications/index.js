import React, {useState} from 'react'
import {NotificationManager} from 'react-notifications'

export const NotificationInfo = () => {
  return (
    <button
      className="btn btn-default bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white hover:text-white active:text-white"
      onClick={() => NotificationManager.info('Info message')}>
      Info
    </button>
  )
}

export const NotificationWarning = () => {
  return (
    <button
      className="btn btn-default bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 text-white hover:text-white active:text-white"
      onClick={() =>
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000
        )
      }>
      Warning
    </button>
  )
}

export const NotificationError = () => {
  return (
    <button
      className="btn btn-default bg-red-500 hover:bg-red-600 active:bg-red-600 text-white hover:text-white active:text-white"
      onClick={() =>
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback')
        })
      }>
      Error
    </button>
  )
}

export const NotificationSuccess = () => {
  return (
    <button
      className="btn btn-default bg-green-500 hover:bg-green-600 active:bg-green-600 text-white hover:text-white active:text-white"
      onClick={() =>
        NotificationManager.success('Success message', 'Title here')
      }>
      Success
    </button>
  )
}
