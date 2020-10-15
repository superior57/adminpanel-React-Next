import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {withRedux} from '../../src/lib/redux'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: 'SET_DEMO',
      layout: 'layout-1',
      direction: 'rtl',
      collapsed: false,
      palettes: {
        background: 'bg-indigo-800',
        logo: 'bg-indigo-700',
        leftSidebar: 'bg-indigo-700',
        rightSidebar: 'white',
        navbar: 'bg-indigo-800',
        topNavigation: 'bg-indigo-800'
      },
      leftSidebar: {
        showButtonText: true,
        showSectionTitle: true,
        showLogo: true,
        showCard: true,
        showAccountLinks: false,
        card: 1
      }
    })
  })
  router.push('/dashboards/dashboard-1')
  return null
}
export default withRedux(Index)
