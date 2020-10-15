import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Breadcrumb from '../../src/components/breadcrumbs'
import Widget from '../../src/components/widget'

const Index = () => {
  const items1 = [
    {title: 'Home', url: '/', last: true},
  ]
  const items2 = [
    {title: 'Home', url: '/', last: false},
    {title: 'Second level', url: '/', last: true},
  ]
  const items3 = [
    {title: 'Home', url: '/', last: false},
    {title: 'Second level', url: '/', last: false},
    {title: 'Third level', url: '/', last: true}
  ]

  return (
    <Layout>
      <SectionTitle title="UI Elements" subtitle="Breadcrumbs" />
      <Widget
        title="Default breadcrumbs"
        description={
          <span>
            Use the <code>&lt;Breadcrumbs /&gt;</code> component for breadcrumbs
          </span>
        }>
        <div className="flex flex-row mb-4">
          <div className="w-full">
            <Breadcrumb items={items1} />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full">
            <Breadcrumb items={items2} />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full">
            <Breadcrumb items={items3} />
          </div>
        </div>
      </Widget>
    </Layout>
  )
}
export default withRedux(Index)
