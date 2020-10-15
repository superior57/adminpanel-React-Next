import React from 'react'

export const InlineRadio = () => (
  <div className="flex flex-row items-center justify-start">
    <div className="text-default ltr:mr-2 rtl:mr-2">Label</div>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="0"
        name="r4"
        className="form-radio text-blue-500 h-4 w-4"
        checked
      />
      <span>Option 1</span>
    </label>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="1"
        name="r4"
        className="form-radio text-blue-500 h-4 w-4"
      />
      <span>Option 2</span>
    </label>
    <p className="text-xs text-secondary">This is a hint</p>
  </div>
)

export const InvalidInlineRadio = () => (
  <div className="flex flex-row items-center justify-start">
    <div className="text-default ltr:mr-2 rtl:mr-2">Label</div>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="0"
        name="r5"
        className="form-radio text-red-500 h-4 w-4"
        checked
      />
      <span>Option 1</span>
    </label>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="1"
        name="r5"
        className="form-radio text-red-500 h-4 w-4"
      />
      <span>Option 2</span>
    </label>
    <p className="text-xs text-red-500">Option is required</p>
  </div>
)

export const ValidInlineRadio = () => (
  <div className="flex flex-row items-center justify-start">
    <div className="text-default ltr:mr-2 rtl:mr-2">Label</div>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="0"
        name="r5"
        className="form-radio text-green-500 h-4 w-4"
        checked
      />
      <span>Option 1</span>
    </label>
    <label className="inline-flex items-center children-x-2">
      <input
        type="radio"
        value="1"
        name="r5"
        className="form-radio text-green-500 h-4 w-4"
      />
      <span>Option 2</span>
    </label>
    <p className="text-xs text-green-500">Option is valid</p>
  </div>
)

