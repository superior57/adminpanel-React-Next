import React from 'react'
import {withRedux} from '../../src/lib/redux'
import Layout from '../../src/layouts'
import SectionTitle from '../../src/components/section-title'
import Radar from '../../src/components/charts/radar'
import Polar from '../../src/components/charts/polar'
import Bubble from '../../src/components/charts/bubble'
import Scatter from '../../src/components/charts/scatter'
import Widget from '../../src/components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Charts" subtitle="Other charts" />
    <Widget
      title="Scatter charts"
      description={
        <span>
          Use the <code>&lt;Scatter /&gt;</code> component for scatter charts
        </span>
      }>
      <Scatter />
    </Widget>
    <Widget
      title="Bubble charts"
      description={
        <span>
          Use the <code>&lt;Bubble /&gt;</code> component for bubble charts
        </span>
      }>
      <Bubble />
    </Widget>
    <Widget
      title="Radar charts"
      description={
        <span>
          Use the <code>&lt;Radar /&gt;</code> component for radar charts
        </span>
      }>
      <Radar height={300} />
    </Widget>
    <Widget
      title="Polar charts"
      description={
        <span>
          Use the <code>&lt;DefaultBadge /&gt;</code> component for polar charts
        </span>
      }>
      <Polar />
    </Widget>
  </Layout>
)
export default withRedux(Index)
