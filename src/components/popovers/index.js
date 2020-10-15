import React from 'react'
import Popper from 'popper.js'

const placements = ['auto', 'top', 'right', 'bottom', 'left'] //-start, -end

export const Popover = ({
  placement,
  title,
  content,
  children
}) => {
  const [popoverShow, setPopoverShow] = React.useState(false)
  const btnRef = React.createRef()
  const popoverRef = React.createRef()
  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: placement
    })
    setPopoverShow(true)
  }
  const closePopover = () => {
    setPopoverShow(false)
  }
  let margin = 'm-0'
  if(placement === 'left') margin = 'mr-2'
  if(placement === 'right') margin = 'ml-2'
  if(placement === 'top') margin = 'mb-2'
  if(placement === 'bottom') margin = 'mt-2'
  return (
    <>
      <button
        className="btn btn-default btn-rounded"
        type="button"
        onClick={() => {
          popoverShow ? closePopover() : openPopover()
        }}
        ref={btnRef}>
        {children}
      </button>
      <div
        className={`popover ${
          popoverShow ? 'popover-show ' : ''
        }`}
        ref={popoverRef}>
        <div
          className="popover-title">
          {title}
        </div>
        <div className="popover-content">{content}</div>
      </div>
    </>
  )
}

export const Tooltip = ({
  placement,
  title,
  content,
  children
}) => {
  const [tooltipShow, setPopoverShow] = React.useState(false)
  const btnRef = React.createRef()
  const tooltipRef = React.createRef()
  const openPopover = () => {
    new Popper(btnRef.current, tooltipRef.current, {
      placement: placement
    })
    setPopoverShow(true)
  }
  const closePopover = () => {
    setPopoverShow(false)
  }
  let margin = 'm-0'
  if(placement === 'left') margin = 'mr-2'
  if(placement === 'right') margin = 'ml-2'
  if(placement === 'top') margin = 'mb-2'
  if(placement === 'bottom') margin = 'mt-2'
  return (
    <>
      <button
        className="btn btn-default btn-rounded"
        type="button"
onMouseEnter={openPopover}
onMouseLeave={closePopover}
        onClick={() => {
          tooltipShow ? closePopover() : openPopover()
        }}
        ref={btnRef}>
        {children}
      </button>
      <div
        className={`tooltip ${
          tooltipShow ? 'tooltip-show ' : ''
        }`}
        ref={tooltipRef}>
        <div className="tooltip-content">{content}</div>
      </div>
    </>
  )
}

