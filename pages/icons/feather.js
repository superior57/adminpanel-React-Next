import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import featherIcons from '../../src/json/feather-icons.json'
import Widget from '../../src/components/widget'
import * as Icon from 'react-feather';

const Feather = () => (
  <Layout>
    <SectionTitle title="Icons" subtitle="Country flags" />
    <Widget
      title="Feather"
      description={
        <span>
          Use the <code>&lt;Flag /&gt;</code> component for country flags
        </span>
      }>
      {/*
      <div className="flex flex-wrap">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {flags.map((flag, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 w-48 text-center">
              <Flag size="2xl" code={flag.code} />
              <div className="text-secondary text-sm mt-2">{flag.name}</div>
            </div>
          ))}
        </div>
      </div>
      */}
    </Widget>
  </Layout>
)
export default withRedux(Feather)
