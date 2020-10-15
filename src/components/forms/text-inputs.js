import React from 'react'
import {Cross, Check} from '../svg'

export const TextInput = () => (
  <>
    <label className="block">
      <span className="text-sm text-default">Label</span>
      <input
        name="name"
        type="text"
        className="text-sm form-input mt-1 block w-full border"
        placeholder="Enter something..."
      />
    </label>
    <p className="mt-1 text-xs text-secondary">This is a hint</p>
  </>
)

export const InvalidTextInput = () => (
  <>
    <div className="relative">
      <label className="block">
        <span className="text-default">First name</span>
        <input
          name="name"
          type="text"
          className="form-input text-xs mt-1 block w-full border-red-500"
          placeholder="john@example.com"
        />
      </label>
      <Cross />
    </div>
    <p className="mt-1 text-xs text-red-500">First name is required</p>
  </>
)

export const ValidTextInput = () => (
  <>
    <div className="relative">
      <label className="block">
        <span className="text-default">First name</span>
        <input
          name="name"
          type="text"
          className="form-input text-xs mt-1 block w-full border-green-500"
          placeholder="john@example.com"
        />
      </label>
      <Check />
    </div>
    <p className="mt-1 text-xs text-green-500">First name is valid</p>
  </>
)
