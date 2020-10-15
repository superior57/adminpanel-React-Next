import React from 'react'
import {withRedux} from '../../src/lib/redux'
import Layout from '../../src/layouts'
import SectionTitle from '../../src/components/section-title'
import Line from '../../src/components/charts/line'
import Line1 from '../../src/components/charts/line-1'
import Line2 from '../../src/components/charts/line-2'
import Widget from '../../src/components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Charts" subtitle="Line charts" />
    <div className="flex flex-col">
      <div className="w-full">
        <Widget
          title="Simple line charts"
          description={
            <span>
              Use the following examples as starting points for simple line
              charts
            </span>
          }>
          <div className="w-full mb-4">
            <Line height={150} fill={false} />
          </div>
          <div className="w-full mb-4">
            <Line1 color1="bg-teal-500" fill={false} />
          </div>
        </Widget>
      </div>
      <div className="w-full">
        <Widget
          title="Simple area chart"
          description={
            <span>
              Use the following examples as starting points for simple area
              charts
            </span>
          }>
          <div className="w-full mb-4">
            <Line1 color1="bg-teal-500" />
          </div>
          <div className="w-full mb-4">
            <Line2 />
          </div>
        </Widget>
      </div>
    </div>
  </Layout>
)
export default withRedux(Index)
