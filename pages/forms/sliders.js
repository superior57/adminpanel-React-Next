import React, {useState} from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import {DefaultSlider, RangeSlider} from '../../src/components/sliders'

const palette = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const Index = () => (
  <Layout>
    <SectionTitle title="Forms" subtitle="Sliders" />
    <Widget title="Sliders" description={<span>Simple slider</span>}>
      <div className="flex flex-wrap w-full">
        <div className="w-1/3 p-2">
          <DefaultSlider />
        </div>
      </div>
    </Widget>
    <Widget title="Sliders" description={<span>Range slider</span>}>
      <div className="flex flex-wrap w-full">
        <div className="w-1/3 p-2">
          <RangeSlider />
        </div>
      </div>
    </Widget>
    <Widget title="Sliders" description={<span>Slider styles</span>}>
      <div className="flex flex-col w-full">
        {palette.map((color, i) => (
          <div className="w-1/3 p-2" key={i}>
            <DefaultSlider className={`slider-${color}`} />
          </div>
        ))}
      </div>
    </Widget>

  </Layout>
)
export default withRedux(Index)
