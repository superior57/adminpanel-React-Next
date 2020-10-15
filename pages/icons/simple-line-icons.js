import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import icons from '../../src/json/icons.json'
import Widget from '../../src/components/widget'
import Icon from '../../src/components/icon'

const SimpleLineIcons = () => (
  <Layout>
    <SectionTitle title="Icons" subtitle="Simple line icons" />
    <Widget
      title="Icons"
      description={
        <span>
          Use the <code>&lt;Icon /&gt;</code> component to use the simple line
          icons. Use the <code>.text-size</code> utilities for different sizes
        </span>
      }>
      <div className="flex flex-wrap mb-4">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
            .reverse()
            .map((size, i) => (
              <div className="flex flex-col items-center justify-center pr-4 mb-4 w-36 text-center">
                <Icon
                  icon="icon-compass"
                  classNames={`text-${size} font-bold mb-2 block`}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center pr-4 mb-4 w-36 text-center">
              <Icon icon={icon} classNames={`text-2xl font-bold mb-2`} />
            </div>
          ))}
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(SimpleLineIcons)
