import React from 'react'
import * as Icon from 'react-feather'

const navigation = [
  {
    title: 'Applications',
    items: [
      {
        url: '/',
        icon: <Icon.Box size={20} />,
        title: 'Dashboards',
        items: [
          {
            url: '/dashboards/dashboard-1',
            title: 'Analytics',
            items: []
          },
          {
            url: '/dashboards/dashboard-2',
            title: 'Financial',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <Icon.Award size={20} />,
        title: 'Demos',
        badge: {
          color: 'green',
          text: 6
        },
        items: [
          {
            url: '/demos/demo-1',
            title: 'Default sidebar',
            items: []
          },
          {
            url: '/demos/demo-2',
            title: 'Dark sidebar',
            items: []
          },
          {
            url: '/demos/demo-3',
            title: 'Small sidebar',
            items: []
          },
          {
            url: '/demos/demo-4',
            title: 'Dark navbar',
            items: []
          },
          {
            url: '/demos/demo-5',
            title: 'Top navigation',
            items: []
          },
          {
            url: '/demos/demo-6',
            title: 'Sidebar over',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <Icon.Activity size={20} />,
        title: 'Backgrounds',
        badge: {
          color: 'indigo',
          text: 3
        },
        items: [
          {
            url: '/demos/demo-7',
            title: 'Light',
            items: []
          },
          {
            url: '/demos/demo-8',
            title: 'Dark',
            items: []
          },
          {
            url: '/demos/demo-9',
            title: 'Blue',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Components',
    items: [
      {
        url: '/',
        icon: <Icon.Droplet size={20} />,
        title: 'UI Elements',
        items: [
          {
            url: '/ui-elements/badges',
            title: 'Badges',
            items: []
          },
          {
            url: '/ui-elements/breadcrumbs',
            title: 'Breadcrumbs',
            items: []
          },
          {
            url: '/ui-elements/buttons',
            title: 'Buttons',
            items: []
          },
          {
            url: '/ui-elements/colors',
            title: 'Colors',
            items: []
          },
          {
            url: '/ui-elements/images',
            title: 'Images',
            items: []
          },
          {
            url: '/ui-elements/lists',
            title: 'Lists',
            items: []
          },
          {
            url: '/ui-elements/progress-bars',
            title: 'Progress bars',
            items: []
          },
          {
            url: '/ui-elements/pagination',
            title: 'Pagination',
            items: []
          },
          {
            url: '/ui-elements/tabs',
            title: 'Tabs',
            items: []
          },
          {
            url: '/ui-elements/typography',
            title: 'Typography',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <Icon.Calendar size={20} />,
        title: 'Forms',
        badge: {
          color: 'red',
          text: 6
        },
        items: [
          {
            url: '/forms/default-forms',
            title: 'Default forms',
            items: []
          },
          {
            url: '/forms/react-select',
            title: 'React select',
            items: []
          },
          {
            url: '/forms/sliders',
            title: 'Sliders',
            items: []
          },
          /*
          {
            url: '/forms/datepicker',
            title: 'Date picker',
            items: []
          },
          */
          {
            url: '/forms/switches',
            title: 'Switches',
            items: []
          }
          /*
          {
            url: '/forms/validation',
            title: 'Form validation',
            items: []
          }
          */
        ]
      },
      {
        url: '/',
        icon: <Icon.Grid size={20} />,
        title: 'Tables',
        items: [
          {
            url: '/tables/default-tables',
            title: 'Default tables',
            items: []
          },
          {
            url: '/tables/datatables',
            title: 'Datatables',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <Icon.Clock size={20} />,
        title: 'Notifications',
        badge: {
          color: 'blue',
          text: 2
        },
        items: [
          {
            url: '/notifications/alerts',
            title: 'Alerts',
            items: []
          },
          {
            url: '/notifications/react-notifications',
            title: 'React notifications',
            items: []
          },
          {
            url: '/notifications/modals',
            title: 'Modals',
            items: []
          },
          {
            url: '/notifications/popovers',
            title: 'Popovers and tooltips',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Pages',
    items: [
      {
        url: '/',
        icon: <Icon.Copy size={20} />,
        title: 'Authentication',
        badge: {
          color: 'green',
          text: 7
        },
        items: [
          {
            url: '/pages/contact-us',
            title: 'Contact us',
            items: []
          },
          {
            url: '/pages/login',
            title: 'Login',
            items: []
          },
          {
            url: '/pages/create-account',
            title: 'Create account',
            items: []
          },
          {
            url: '/pages/email-confirmation',
            title: 'Email confirmation',
            items: []
          },
          {
            url: '/pages/logout',
            title: 'Logout',
            items: []
          },
          {
            url: '/pages/reset-password',
            title: 'Reset password',
            items: []
          },
          {
            url: '/pages/forgot-password',
            title: 'Forgot password',
            items: []
          },
          {
            url: '/pages/lock-screen',
            title: 'Lock screen',
            items: []
          },
          {
            url: '/pages/subscribe',
            title: 'Subscribe',
            items: []
          }
        ]
      },
      {
        url: '/extras/user-profile',
        icon: <Icon.User size={20} />,
        title: 'User profile',
        items: []
      },
      {
        url: '/',
        icon: <Icon.Clock size={20} />,
        title: 'Pages',
        items: [
          {
            url: '/pages/empty-page',
            title: 'Empty page',
            items: []
          },
          {
            url: '/pages/terms-of-service',
            title: 'Terms of service',
            items: []
          },
          {
            url: '/pages/privacy-policy',
            title: 'Privacy policy',
            items: []
          },
          {
            url: '/pages/error-page',
            title: 'Error page',
            items: []
          },
          {
            url: '/pages/coming-soon',
            title: 'Coming soon',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Other',
    items: [
      {
        url: '/charts',
        icon: <Icon.PieChart size={20} />,
        title: 'Charts',
        badge: {
          color: 'yellow',
          text: 4
        },
        items: [
          {
            url: '/charts/bar',
            title: 'Bar charts',
            items: []
          },
          {
            url: '/charts/line',
            title: 'Line and area charts',
            items: []
          },
          {
            url: '/charts/pie',
            title: 'Pie and doughnut charts',
            items: []
          },
          {
            url: '/charts/other',
            title: 'Other charts',
            items: []
          }
        ]
      },
      /*
      {
        url: '/',
        icon: <Icon.Map size={20} />,
        title: 'Maps',
        items: [
          {
            url: '/maps/leaflet',
            title: 'Leaflet maps',
            items: []
          },
          {
            url: '/maps/vector-maps',
            title: 'Vector maps',
            items: []
          }
        ]
      },
      */
      {
        url: '/',
        icon: <Icon.Compass size={20} />,
        title: 'Icons',
        items: [
          {
            url: '/icons/country-flags',
            title: 'Country flags',
            items: []
          },
          {
            url: '/icons/simple-line-icons',
            title: 'Simple line icons',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Docs',
    items: [
      {
        url: '/documentation',
        icon: <Icon.HelpCircle size={20} />,
        title: 'Documentation',
        items: []
      }
    ]
  },
  {
    title: 'Intro',
    items: [
      {
        url: '/',
        icon: <Icon.Home size={20} />,
        title: 'Home page',
        items: []
      }
    ]
  }
]
export default navigation
