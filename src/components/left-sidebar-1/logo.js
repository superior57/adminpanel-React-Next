import React from 'react'
import {ToggleLeft, X} from 'react-feather'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import Link from 'next/link'
import {getColor} from '../../functions/colors'

const Logo = () => {
  const {name, leftSidebar, collapsed} = useSelector(
    state => ({
      name: state.name,
      collapsed: state.collapsed,
      leftSidebar: state.leftSidebar
    }),
    shallowEqual
  )
  const {showLogo} = {...leftSidebar}
  if (!showLogo) return null
  const dispatch = useDispatch()
  return (
    <div
      className="logo h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-between px-4">
      <Link href="/">
        <a className="flex flex-row items-center justify-start children-x-1">
          <ToggleLeft size={26} />
          <span>{name}</span>
        </a>
      </Link>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_CONFIG',
            config: {
              key: 'collapsed',
              value: !collapsed
            }
          })
        }
        className="btn btn-circle">
        <X size={24} />
      </button>
    </div>
  )
}

export default Logo
