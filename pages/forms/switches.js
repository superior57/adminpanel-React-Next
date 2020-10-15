import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Switch from '../../src/components/switch'
import Widget from '../../src/components/widget'

const items = [
  {title: 'API Access', subtitle: 'Enable access', checked: false},
  {title: 'Auth Access', subtitle: 'Enable access', checked: true}
]

const palette = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const Index = () => (
  <Layout>
    <SectionTitle title="Forms" subtitle="Switches" />

    <Widget
      title="Default switches"
      description={
        <span>
          Use the <code>&lt;Switch /&gt;</code> component for simple switches
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 lg:w-1/4">
          {items.map((item, i) => (
            <div className="flex items-center justify-between p-2" key={i}>
              <div className="flex flex-col">
                <div className="text-default text-sm">{item.title}</div>
                <div className="text-default text-xs font-light">
                  {item.subtitle}
                </div>
              </div>
              <Switch initialState={item.checked} />
            </div>
          ))}
        </div>
      </div>
    </Widget>

    <Widget
      title="Switch colors"
      description={
        <span>
          Use the <code>&lt;Switch /&gt;</code> component with the{' '}
          <code>color</code> prop to change the <code>Switch</code> color
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 lg:w-1/4">
          {palette.map((color, i) => (
            <div className="flex items-center justify-between p-2" key={i}>
              <div className="flex flex-col">
                <div className="text-default text-sm">{color}</div>
                <div className="text-default text-xs font-light">
                  Sample label
                </div>
              </div>
              <Switch initialState={true} color={color} />
            </div>
          ))}
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
