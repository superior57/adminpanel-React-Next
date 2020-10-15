import React from 'react'
import Layout from '../src/layouts'
import {withRedux} from '../src/lib/redux'
import SectionTitle from '../src/components/section-title'

const Index = () => (
  <Layout>
    <SectionTitle title="Pages" subtitle="Empty page" />
    <p>This is an empty page</p>
  </Layout>
)
export default withRedux(Index)
