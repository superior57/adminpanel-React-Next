import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import {
  NotificationInfo,
  NotificationWarning,
  NotificationError,
  NotificationSuccess
} from '../../src/components/notifications'

const Index = () => (
  <Layout>
    <SectionTitle title="Notifications" subtitle="React notifications" />

    <Widget
      title="Notifications"
      description={
        <span>
          Use the <code>&lt;NotificationInfo /&gt;</code> component for to show information
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="p-2">
          <NotificationInfo />
        </div>
      </div>
    </Widget>
    <Widget
      title="Notifications"
      description={
        <span>
          Use the <code>&lt;NotificationWarning /&gt;</code> component for to show warnings
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="p-2">
          <NotificationWarning />
        </div>
      </div>
    </Widget>
    <Widget
      title="Notifications"
      description={
        <span>
          Use the <code>&lt;NotificationError /&gt;</code> component for to show error notifications
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="p-2">
          <NotificationError />
        </div>
      </div>
    </Widget>
    <Widget
      title="Notifications"
      description={
        <span>
          Use the <code>&lt;NotificationSuccess /&gt;</code> component for to show success notifications
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="p-2">
          <NotificationSuccess />
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
