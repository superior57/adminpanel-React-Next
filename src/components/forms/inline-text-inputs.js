import React from 'react'
import {Cross, Check} from '../svg'

export const InlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <label className="flex flex-row flex-nowrap items-center children-x-2">
        <span className="text-sm text-default whitespace-no-wrap">
          Label
        </span>
        <input
          name="name"
          type="text"
          className="text-sm form-input block w-full border"
          placeholder="Enter something..."
        />
      </label>
      <p className="text-xs text-secondary">This is a hint</p>
    </div>
  </>
)

export const InvalidInlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <div className="relative">
        <label className="flex flex-row flex-nowrap items-center">
          <span className="text-sm text-default whitespace-no-wrap ltr:mr-2 rtl:ml-2">
            Label
          </span>
          <input
            name="name"
            type="text"
            className="text-sm form-input block w-full border border-red-500"
            placeholder="Enter something..."
          />
        </label>
        <Cross />
      </div>
      <p className="ltr:ml-2 rtl:mr-2 text-xs text-red-500">First name is required</p>
    </div>
  </>
)

export const ValidInlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <div className="relative">
        <label className="flex flex-row flex-nowrap items-center">
          <span className="text-sm text-default whitespace-no-wrap ltr:mr-2 rtl:ml-2">
            Label
          </span>
          <input
            name="name"
            type="text"
            className="text-sm form-input block w-full border border-green-500"
            placeholder="Enter something..."
          />
        </label>
        <Check />
      </div>
      <p className="ltr:ml-2 rtl:mr-2 text-xs text-green-500">First name is valid</p>
    </div>
  </>
)
