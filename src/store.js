import { createStore } from 'redux'
import users from './json/users.json'

const initialState = {
  name: 'Concavo',
  description: 'Concavo React Tailwind CSS admin template',
  user: users[0],
  url: 'https://concavo.mobifica.com',
  layout: 'layout-1',
  direction: 'ltr',
  collapsed: false,
  toggleRightSidebar: false,
  colors: [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink',
  ],
  palettes: {
    background: 'white',
    logo: 'white',
    leftSidebar: 'white',
    rightSidebar: 'white',
    navbar: 'white',
    topNavigation: 'white',
  },
  leftSidebar: {
    showButtonText: true,
    showSectionTitle: true,
    showLogo: true,
    showCard: true,
    showAccountLinks: false,
    showProjects: true,
    showTags: true,
    card: 1,
  },
  workspaces: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DEMO':
      return {
        ...state,
        layout: action.layout,
        collapsed: action.collapsed,
        direction: action.direction,
        leftSidebar: {
          ...action.leftSidebar,
        },
        palettes: {
          ...action.palettes,
        },
      }
    case 'SET_PALETTE':
      return {
        ...state,
        palettes: {
          ...state.palettes,
          [`${action.key}`]: action.value,
        },
      }
    case 'SET_LEFT_SIDEBAR_CONFIG':
      return {
        ...state,
        leftSidebar: {
          ...state.leftSidebar,
          [`${action.key}`]: action.value,
        },
      }
    case 'SET_LAYOUT':
      if (action.layout === 'layout-3' || action.layout === 'layout-4') {
        return {
          ...state,
          layout: action.layout,
          collapsed: true,
        }
      }
      return {
        ...state,
        layout: action.layout,
        collapsed: false,
      }
      return {
        ...state,
        [`${key}`]: value,
      }
    case 'SET_CONFIG':
      let { key, value } = { ...action.config }
      return {
        ...state,
        [`${key}`]: value,
      }
    case 'SET_WORKSPACES':
      let { workspaces } = action
      return {
        ...state,
        workspaces,
      }
    case 'ADD_WORKSPACE':
      const name = action.name
      return {
        ...state,
        workspaces: [...state.workspaces, { title: name }],
      }

    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState)
}
