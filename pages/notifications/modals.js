import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Modal from '../../src/components/modals'
import Widget from '../../src/components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Notifications" subtitle="Modals" />
    <Widget
      title="Default modals"
      description={
        <span>
          Use the <code>&lt;Modal /&gt;</code> component to show modal windows
        </span>
      }>
      <Modal />
    </Widget>
  </Layout>
)
export default withRedux(Index)
