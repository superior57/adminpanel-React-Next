import React, { useEffect } from 'react'
import ISSWorkspace from '../src/components/ISS'
import BlotterWorkspace from '../src/components/blotter'
import ScreenerWorkspace from '../src/components/screener'
import WatchlistWorkspace from '../src/components/watchlist'
import WatchlistsWorkspace from '../src/components/watchlists'

import { withRedux } from '../src/lib/redux'
import Layout from '../src/layouts'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { render } from 'nprogress'

function Workspaces() {
  const dispatch = useDispatch()
  const workspaces = useSelector((globalstate) => {
    return globalstate.workspaces
  })
  useEffect(() => {
    dispatch({
      type: 'SET_WORKSPACES',
      workspaces: [
        {
          title: 'PEMEX - 2321',
          type: 'ISS',
          isin:"Test03",
          content: [
            { type: 'iss-description', title: 'Description', order: '0' },
            { type: 'iss-cashflows', title: 'Cash Flows', order: '0' },
            { type: 'iss-yas-calculator', title: 'YAS Calculator', order: '0' },
            {
              type: 'iss-centralized-orderbook',
              title: 'Centralized Orderbook',
              order: '0',
            },
            { type: 'iss-structure', title: 'Structure', order: '0' },
            {
              type: 'iss-historic-price',
              title: 'Historic Prices',
              order: '0',
            },
          ],
        },
        {
          title: 'PEMEX - 5090',
          type: 'ISS',
          isin:"Test02",
          content: [
            { type: 'iss-description', title: 'Description', order: '0' },
            { type: 'iss-cashflows', title: 'Cash Flows', order: '0' },
            { type: 'iss-yas-calculator', title: 'YAS Calculator', order: '0' },
            {
              type: 'iss-centralized-orderbook',
              title: 'Centralized Orderbook',
              order: '0',
            },
            { type: 'iss-structure', title: 'Structure', order: '0' },
            {
              type: 'iss-historic-price',
              title: 'Historic Prices',
              order: '0',
            },
          ],
        },
      ],
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: 'SET_DEMO',
      layout: 'layout-3',
      direction: 'ltr',
      collapsed: true,
      palettes: {
        background: 'bg-gray-900',
        logo: 'bg-gray-800',
        leftSidebar: 'bg-gray-800',
        rightSidebar: 'white',
        navbar: 'bg-gray-900',
        topNavigation: 'bg-gray-900',
      },
      leftSidebar: {
        showButtonText: true,
        showSectionTitle: true,
        showLogo: true,
        showCard: true,
        showAccountLinks: false,
        card: 1,
      },
    })
  }, [])

  const [currentworkspace, setcurrentworkspace] = React.useState(0)
  
  console.log(workspaces)
  if (!workspaces?.length) {
    return 'loading'
  }
  function renderworkspace() {
    if (workspaces?.[currentworkspace].type == 'ISS') {
      return <ISSWorkspace data={workspaces?.[currentworkspace]}></ISSWorkspace>
    } else if (workspaces?.[currentworkspace].type == 'blotter') {
      return (
        <BlotterWorkspace
          data={workspaces?.[currentworkspace]}
        ></BlotterWorkspace>
      )
    } else if (workspaces?.[currentworkspace].type == 'screener') {
      return (
        <ScreenerWorkspace
          data={workspaces?.[currentworkspace]}
        ></ScreenerWorkspace>
      )
    } else if (workspaces?.[currentworkspace].type == 'watchlist') {
      return (
        <WatchlistWorkspace
          data={workspaces?.[currentworkspace]}
        ></WatchlistWorkspace>
      )
    } else if (workspaces?.[currentworkspace].type == 'watchlists') {
      return (
        <WatchlistsWorkspace
          data={workspaces?.[currentworkspace]}
        ></WatchlistsWorkspace>
      )
    } else {
      return null
    }
  }
  function addWorkspace() {
    dispatch({
      type: 'ADD_WORKSPACE',
      name: 'New Workspace',
    })
    return null
  }
  return (
    <Layout>
      <div className="flex flex-wrap flex-col w-full tabs">
        <div className="flex flex-nowrap flex-row children-x-2">
          {workspaces?.map((workspace, index) => (
            <div key={index} className="flex-none">
              <button
                onClick={() => {
                  setcurrentworkspace(index)
                }}
                className={
                  currentworkspace === workspace.index
                    ? 'tab tab-underline tab-active'
                    : 'tab tab-underline'
                }
                type="button"
              >
                {workspace.title}
              </button>
            </div>
          ))}
          <div className="flex-none">
            <button
              onClick={() => {
                addWorkspace()
              }}
              className={'tab tab-underline'}
              type="button"
            >
              Add +
            </button>
          </div>
        </div>

        <div key={currentworkspace} className={`tab-content`}>
          {renderworkspace()}
        </div>
      </div>
    </Layout>
  )
}

export default withRedux(Workspaces)
