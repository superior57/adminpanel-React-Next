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
      layout: 'layout-3',
      direction: 'ltr',
      collapsed: false,
      palettes: {
        background: 'bg-gray-900',
        logo: 'bg-gray-800',
        leftSidebar: 'bg-gray-800',
        rightSidebar: 'white',
        navbar: 'bg-gray-900',
        topNavigation: 'bg-gray-900'
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
  router.push('/dashboards/mtrade')
  return null
}
export default withRedux(Index)
