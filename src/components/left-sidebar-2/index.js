import React, {useState} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import Link from 'next/link'
import navigation from '../../navigation'
import Logo from './logo'
import User from '../left-sidebar-1/user'
import Badge from '../left-sidebar-1/badge'
import Title from '../left-sidebar-1/title'
import Projects from '../left-sidebar-1/projects'
import Tags from '../left-sidebar-1/tags'

const Single = ({items}) => {
  const {collapsed} = useSelector(
    state => ({
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  if (collapsed) {
    return (
      <li className="list-item list-item-collapsed">
        <Link href={items.url}>
          <a className="btn-transparent">
            <div className="list-item-icon">{items.icon}</div>
          </a>
        </Link>
      </li>
    )
  }
  return (
    <li className="list-item">
      <Link href={items.url}>
        <a className="btn-transparent">
          <div className="list-item-icon">{items.icon}</div>
          <span className="list-item-title">{items.title}</span>
          <div className="list-item-badge">
            {items.badge && <Badge {...items.badge} />}
          </div>
        </a>
      </Link>
    </li>
  )
}

const List = ({items}) => {
  const {collapsed} = useSelector(
    state => ({
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  return (
    <ul className="list-none relative">
      {items.items.length === 0 && <Single items={items} />}
      {items.items.length > 0 && (
        <li
          className={`list-item ${
            collapsed ? 'list-item-collapsed' : 'right-arrow relative'
          }`}>
          <button className="btn-transparent">
            <div className="list-item-icon">{items.icon}</div>
            {!collapsed && (
              <span className="list-item-title">{items.title}</span>
            )}
            {!collapsed && (
              <div className="list-item-badge">
                {items.badge && <Badge {...items.badge} />}
              </div>
            )}
          </button>
          <ul
            className={`${
              items.items.length > 4
                ? 'flex-row flex-wrap w-96'
                : 'w-64 flex-col'
            }`}>
            {items.items.map((item, k) => (
              <li
                key={k}
                className={`${items.items.length > 4 ? 'w-48' : 'w-64'}`}>
                <Link href={item.url}>
                  <a className="btn-transparent">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  )
}

const Sidebar = () => {
  const {collapsed} = useSelector(
    state => ({
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  return (
    <div className="left-sidebar left-sidebar-2 text-sm">
      <div className="flex flex-col text-sm">
        <Logo />
        {!collapsed && <User />}
      </div>
      {navigation.map((menu, i) => (
        <div className={`flex flex-col ${collapsed ? 'mb-0' : 'mb-4'}`} key={i}>
          <div className={`${collapsed ? 'hidden' : 'visible'}`}>
            <Title>{menu.title}</Title>
          </div>
          <div className="flex flex-col">
            {menu.items.map((items, j) => (
              <List key={j} items={items} />
            ))}
          </div>
        </div>
      ))}
      <div className={`${collapsed ? 'hidden' : 'visible'}`}>
        <Projects />
        <Tags />
      </div>
    </div>
  )
}

export default Sidebar
