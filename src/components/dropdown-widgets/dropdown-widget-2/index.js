import React, {useState, useEffect} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import flags from '../../../json/navbar-flags.json'
import Link from 'next/link'

const DropdownWidget2 = () => {
  const {direction} = useSelector(
    state => ({
      direction: state.direction,
    }),
    shallowEqual
  )

  const [hidden, setHidden] = useState(true)
  const buttonRef = React.createRef()
  const dropdownRef = React.createRef()
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        hidden ||
        buttonRef.current.contains(event.target) ||
        dropdownRef.current.contains(event.target)
      ) {
        return false
      }
      setHidden(!hidden)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef, buttonRef])
  return (
    <div className="hidden lg:flex h-16 w-12">
      <div className="relative">
        <button
          ref={buttonRef}
          className="flex items-center justify-center h-16 w-12"
          onClick={() => setHidden(!hidden)}>
          <span className={`text-base flag-icon flag-icon-us`}></span>
        </button>
        <div
          ref={dropdownRef}
          className={`navbar-dropdown dropdown ${direction === 'ltr' ? 'dropdown-right' : 'dropdown-left'} w-64 ${hidden ? '' : 'open'}`}>
          <div className="w-64 dropdown-content">
            <div className="navbar-dropdown-title dropdown-title">Change country</div>
            <div className="flex flex-wrap">
              {flags.map((item, i) => (
                <Link href="/" key={i}>
                  <a
                    className="w-1/2 flex items-center justify-start p-2 text-sm children-x-2">
                    <span
                      className={`text-base flag-icon flag-icon-${item.code}`}></span>
                    <span>{item.name}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DropdownWidget2
