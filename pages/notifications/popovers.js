import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import {Popover, Tooltip} from '../../src/components/popovers'
import Widget from '../../src/components/widget'

const placements = ['left', 'top', 'right', 'bottom']
const Index = () => (
  <Layout>
    <SectionTitle title="Notifications" subtitle="Popovers" />
    <Widget
      title="Popovers"
      description={
        <span>
          Use the <code>&lt;Popover /&gt;</code> component to show simple popovers
        </span>
      }>
      <div className="flex flex-row flex-wrap items-center justify-center children-x-2">
        {placements.map((placement, i) => (
          <div key={i}>
            <Popover
              placement={placement}
              title="Popover title"
              content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.">
              On {placement}
            </Popover>
          </div>
        ))}
      </div>
    </Widget>

    <Widget
      title="Tooltips"
      description={
        <span>
          Use the <code>&lt;Tooltip /&gt;</code> component for simple
          tooltips
        </span>
      }>
      <div className="flex flex-row flex-wrap items-center justify-center children-x-2">
        {placements.map((placement, i) => (
          <div key={i}>
            <Tooltip
              placement={placement}
              content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.">
              On {placement}
            </Tooltip>
          </div>
        ))}
      </div>
    </Widget>

  </Layout>
)
export default withRedux(Index)
