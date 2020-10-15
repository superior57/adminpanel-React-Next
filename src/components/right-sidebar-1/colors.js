import React from 'react'
import {useDispatch} from 'react-redux'

const Colors = ({title, palettes, name}) => {
  const dispatch = useDispatch()
  return (
    <div className="mb-2">
      <div
        className={`uppercase text-xs font-bold font-poppins tracking-wider`}>
        {title}
      </div>
      <div className="flex flex-row children-x-1">
        {palettes.map((color, i) => (
          <button
            key={i}
            className={`btn btn-circle btn-raised ${color.bg} ${color.text}`}
            onClick={() => {
              dispatch({
                type: 'SET_PALETTE',
                key: name,
                value: color.name
              })
            }}></button>
        ))}
      </div>
    </div>
  )
}

export default Colors
