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
      layout: 'layout-4',
      direction: 'ltr',
      collapsed: false,
      palettes: {
        background: 'bg-gray-100',
        logo: 'bg-indigo-700',
        leftSidebar: 'white',
        rightSidebar: 'white',
        navbar: 'white',
        topNavigation: 'white'
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
  router.push('/dashboards/dashboard-2')
  return null
}
export default withRedux(Index)
