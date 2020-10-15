import React from 'react'
import * as Icon from 'react-feather'

const navigation = [
  {
    title: 'Section title',
    items: [
      {
        url: '/',
        icon: <Icon.Box size={20} />,
        title: 'Menu 1',
        items: [
          {
            url: '/empty-page',
            title: 'Empty page 1',
            items: []
          },
          {
            url: '/empty-page',
            title: 'Empty page 2',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <Icon.Award size={20} />,
        title: 'Menu 2',
        badge: {
          color: 'green',
          text: 6
        },
        items: [
          {
            url: '/empty-page',
            title: 'Empty page 1',
            items: []
          },
          {
            url: '/empty-page',
            title: 'Empty page 2',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Section title',
    items: [
      {
        url: '/empty-page',
        icon: <Icon.HelpCircle size={20} />,
        title: 'Page link',
        items: []
      }
    ]
  }
]
export default navigation
