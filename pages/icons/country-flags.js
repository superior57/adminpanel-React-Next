import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import flags from '../../src/json/flags.json'
import Widget from '../../src/components/widget'
import Flag from '../../src/components/flag'

const Flags = () => (
  <Layout>
    <SectionTitle title="Icons" subtitle="Country flags" />
    <Widget
      title="Flags"
      description={
        <span>
          Use the <code>&lt;Flag /&gt;</code> component for country flags. Use
          the <code>.text-size</code> utilities for different sizes
        </span>
      }>
      <div className="flex flex-wrap mb-4">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
            .reverse()
            .map((size, i) => (
              <div className="flex flex-col items-center justify-center pr-4 mb-4 w-36 text-center">
                <Flag size={size} code="in" />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {flags.map((flag, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center pr-4 mb-4 w-36 text-center">
              <Flag size="2xl" code={flag.code} />
            </div>
          ))}
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Flags)
