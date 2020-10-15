import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import Link from 'next/link'
import Logo from './logo'
import User from './user'
import Title from './title'
import List from './list'
import Projects from './projects'
import Tags from './tags'
import navigation from '../../navigation'

const Sidebar = () => {
  const {leftSidebar, toggleRightSidebar, collapsed, layout} = useSelector(
    state => ({
      leftSidebar: state.leftSidebar,
      toggleRightSidebar: state.toggleRightSidebar,
      collapsed: state.collapsed,
      layout: state.layout
    }),
    shallowEqual
  )

  const {showProjects, showTags} = {...leftSidebar}
  const dispatch = useDispatch()

  const leftSidebarRef = React.createRef()
  useEffect(() => {
    const handleClickOutside = event => {
      if (toggleRightSidebar) return false
      if (layout !== 3) return false
      if (!collapsed || leftSidebarRef.current.contains(event.target)) {
        return false
      }
      dispatch({
        type: 'SET_CONFIG',
        config: {
          key: 'collapsed',
          value: !collapsed
        }
      })
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [leftSidebarRef])

  return (
    <div ref={leftSidebarRef} className={`left-sidebar left-sidebar-1 text-sm`}>
      <div>
        <div>
          <div className={`flex flex-col`}>
            <Logo />
            <div className="user-card">
              <User />
            </div>
          </div>
          {navigation.map((menu, i) => (
            <div className="flex flex-col" key={i}>
              <Title>{menu.title}</Title>
              <div className="flex flex-col">
                {menu.items.map((items, j) => (
                  <List key={j} items={items} />
                ))}
              </div>
            </div>
          ))}
          {showProjects && <Projects />}
          {showTags && <Tags />}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
