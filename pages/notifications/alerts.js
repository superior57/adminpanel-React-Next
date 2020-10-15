import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import {Alert} from '../../src/components/alerts'
import Widget from '../../src/components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Notifications" subtitle="Alerts" />

    <Widget
      title="Default alerts"
      description={
        <span>
          Use the <code>&lt;Alert /&gt;</code> component for simple alerts. Use the <code>size</code> prop for small alerts
        </span>
      }>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full space-y-4">
          {['blue'].map((color, i) => (
            <>
            <Alert size="sm" color={color} type="warning">
              This is an important alert. Check it out!
            </Alert>
            <Alert color={color} type="warning">
              This is an important alert. Check it out!
            </Alert>
            </>
          ))}
        </div>
      </div>
    </Widget>

    <Widget
      title="Raised alerts"
      description={
        <span>
          Use the <code>raised</code> and <code>flat</code> props for raised alerts
        </span>
      }>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full space-y-4">
          <Alert color="white" raised type="info">
            This is an important alert. Check it out!
          </Alert>
          <Alert color="red" raised flat>
            This is an important alert. Check it out!
          </Alert>
        </div>
      </div>
    </Widget>

    <Widget
      title="Outlined alerts"
      description={
        <span>
          Use the <code>outlined</code> prop for outlined alerts
        </span>
      }>
      <div className="flex flex-col w-full space-y-4">
        <Alert color="blue" outlined>
          This is an important alert. Check it out!
        </Alert>
        <Alert color="blue" outlined rounded raised>
          This is an important alert. Check it out!
        </Alert>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
