import Link from 'next/link'
import {LogOut} from 'react-feather'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {Settings, Menu} from 'react-feather'
import DropdownWidget1 from '../dropdown-widgets/dropdown-widget-1'
import DropdownWidget2 from '../dropdown-widgets/dropdown-widget-2'
import DropdownWidget3 from '../dropdown-widgets/dropdown-widget-3'
import DropdownWidget4 from '../dropdown-widgets/dropdown-widget-4'
import DropdownWidget5 from '../dropdown-widgets/dropdown-widget-5'
import Search from './search'
import ChangeDirection from '../change-direction'

const Navbar = () => {
  const {toggleRightSidebar, collapsed} = useSelector(
    state => ({
      toggleRightSidebar: state.toggleRightSidebar,
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  return (
    <div className="navbar navbar-1">
      <div className="navbar-inner w-full flex items-center justify-start">
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
          className="mx-4">
          <Menu size={20} />
        </button>
        <Search />
        <span className="ltr:ml-auto rtl:mr-auto"></span>
        <DropdownWidget1 />
        <DropdownWidget4 />
        <DropdownWidget3 />
        <DropdownWidget2 />
        <DropdownWidget5 />
        <Link href="/pages/login-1">
          <a className="btn btn-default flex lg:hidden">Logout</a>
        </Link>
        <Link href="/pages/login">
          <a className="btn btn-default hidden lg:flex">Logout</a>
        </Link>
        <button
          className="btn-transparent flex items-center justify-center h-16 w-8 pl-2 lg:pl-0"
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG',
              config: {
                key: 'toggleRightSidebar',
                value: !toggleRightSidebar
              }
            })
          }>
          <Settings size={18} />
        </button>
        <ChangeDirection />
      </div>
    </div>
  )
}

export default Navbar
