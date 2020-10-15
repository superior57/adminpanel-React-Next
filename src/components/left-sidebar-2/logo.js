import React from 'react'
import {ToggleLeft} from 'react-feather'
import {useSelector, shallowEqual} from 'react-redux'
import Link from 'next/link'

const Logo = () => {
  const {name, leftSidebar, collapsed} = useSelector(
    state => ({
      name: state.name,
      collapsed: state.collapsed,
      leftSidebar: state.leftSidebar,
    }),
    shallowEqual
  )
  return (
    <div
      className={`h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider logo ${
        collapsed ? 'justify-center' : 'justify-between px-4'
      }`}>
      {collapsed && (
        <Link href="/">
          <a>
            <ToggleLeft size={32} />
          </a>
        </Link>
      )}
      {!collapsed && (
        <Link href="/">
          <a className="flex flex-row items-center justify-start">
          <ToggleLeft size={26} />
          <span className="ml-1">{name}</span>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Logo
