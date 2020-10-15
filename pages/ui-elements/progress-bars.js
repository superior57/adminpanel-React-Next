import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import {
  ProgressBar,
  ProgressBarWithText,
  ProgressBarMultiple
} from '../../src/components/progress-bars'
import {random} from '../../src/functions/numbers'
import Widget from '../../src/components/widget'

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

const items = [
  {width: 30, color: 'red'},
  {width: 20, color: 'blue'},
  {width: 50, color: 'green'}
]

const Index = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Progress bars" />
    <Widget
      title="Default progress bars"
      description={
        <span>
          Use the <code>&lt;ProgressBar /&gt;</code> component for simple
          progress bars
        </span>
      }>
      <div className="flex flex-col">
        {palette.map((color, i) => (
          <div className="mb-4" key={i}>
            <ProgressBar width={random(30, 70)} color={color} />
          </div>
        ))}
      </div>
    </Widget>
    <Widget
      title="Progress bars with text"
      description={
        <span>
          Use the <code>&lt;ProgressBarWithText /&gt;</code> component for
          progress bars with text inside
        </span>
      }>
      <div className="flex flex-col">
        {palette.map((color, i) => (
          <div className="mb-4" key={i}>
            <ProgressBarWithText width={random(30, 70)} color={color} />
          </div>
        ))}
      </div>
    </Widget>

    <Widget
      title="Combined progress bars"
      description={
        <span>
          Use the <code>&lt;ProgressBarMultiple /&gt;</code> component for
          multiple combined progress bars with text inside
        </span>
      }>
      <div className="flex flex-col">
        <div className="w-1/2">
        <ProgressBarMultiple items={items} />
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
