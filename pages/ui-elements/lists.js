import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import {SingleLineList, MultiLineList, MediaList} from '../../src/components/ui-elements/lists'


const items = Array.from(Array(4).keys())

const Index = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Lists" />

    <Widget
      title="Single line lists"
      description={
        <span>
          Use the <code>&lt;SingleLineList /&gt;</code> component for single line lists
        </span>
      }>
    <div className="flex flex-wrap">
      <div className="w-1/2">
        {items.map((item, i) => (
          <SingleLineList key={i} />
        ))}
      </div>
    </div>
    </Widget>

    <Widget
      title="Multi line lists"
      description={
        <span>
          Use the <code>&lt;MultiLineList /&gt;</code> component for multi line lists
        </span>
      }>
    <div className="flex flex-wrap">
      <div className="w-1/2">
        {items.map((item, i) => (
          <MultiLineList key={i} />
        ))}
      </div>
    </div>
    </Widget>

    <Widget
      title="Media lists"
      description={
        <span>
          Use the <code>&lt;MediaList /&gt;</code> component for media lists
        </span>
      }>
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <MediaList />
      </div>
    </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
