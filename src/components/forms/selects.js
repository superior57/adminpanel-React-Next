import React from 'react'
import {Cross, Check} from '../svg'

export const Select = () => (
  <>
    <label className="block">
      <span className="text-default">Select</span>
      <select className="form-select block w-full mt-1 text-sm">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </label>
    <p className="mt-1 text-xs text-secondary">This is a hint</p>
  </>
)

export const InvalidSelect = () => (
  <>
    <label className="block">
      <span className="text-default">Select</span>
      <select className="form-select block w-full mt-1 text-sm border border-red-500">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </label>
    <p className="mt-1 text-xs text-red-500">Option is required</p>
  </>
)

export const ValidSelect = () => (
  <>
    <label className="block">
      <span className="text-default">Select</span>
      <select className="form-select block w-full mt-1 text-sm border border-green-500">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </label>
    <p className="mt-1 text-xs text-green-500">Option is valid</p>
  </>
)

export const InlineSelect = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <label className="inline-flex items-center children-x-2">
        <span className="text-default whitespace-no-wrap">
          Inline select
        </span>
        <select className="form-select block w-full text-sm">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </label>
      <p className="text-xs text-secondary">This is a hint</p>
    </div>
  </>
)

export const InlineInvalidSelect = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <label className="inline-flex items-center children-x-2">
        <span className="text-default whitespace-no-wrap">
          Inline select
        </span>
        <select className="form-select block w-full text-sm border border-red-500">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </label>
      <p className="text-xs text-red-500">Option is required</p>
    </div>
  </>
)

export const InlineValidSelect = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <label className="inline-flex items-center children-x-2">
        <span className="text-default whitespace-no-wrap">
          Inline select
        </span>
        <select className="form-select block w-full text-sm border border-green-500">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </label>
      <p className="text-xs text-green-500">Option is valid</p>
    </div>
  </>
)
