import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const colors = [
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
    <SectionTitle title="UI Elements" subtitle="Colors" />
    <Widget
      title="Background colors"
      description={
        <span>
          Use the <code>bg-&#123;color&#125;-&#123;100-900&#125;</code> classes
          for background colors.
        </span>
      }>
      <div className="w-full">
        {colors.map((color, i) => (
          <div className="mb-2">
            <div className="flex items-center justify-start flex-wrap children-x-2">
              <div className="font-bold text-default text-sm w-20">{color}</div>
              {shades.map((shade, j) => (
                <div className="w-8">
                  <div
                    className={`h-8 w-8 rounded-lg bg-${color}-${shade}`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Widget>
    <Widget
      title="Text colors"
      description={
        <span>
          Use the <code>text-&#123;color&#125;-&#123;100-900&#125;</code>{' '}
          classes for text colors.
        </span>
      }>
      <div className="flex flex-wrap flex-row items-start justify-start w-full children-x-4">
        {colors.map((color, i) => (
          <div className="flex flex-col mb-4">
            <div className="font-bold text-sm mb-2">{color}</div>
            {shades.map((shade, j) => (
              <div className={`font-bold text-${color}-${shade}`}>
                text-{color}-{shade}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Widget>
    <Widget
      title="Border colors"
      description={
        <span>
          Use the <code>border-&#123;color&#125;-&#123;100-900&#125;</code>{' '}
          classes for border colors.
        </span>
      }>
      <div className="w-full">
        {colors.map((color, i) => (
          <div className="mb-2">
            <div className="flex items-center justify-start flex-wrap children-x-2">
              <div className="font-bold text-default text-sm w-20">{color}</div>
              {shades.map((shade, j) => (
                <div className="w-8">
                  <div
                    className={`h-8 w-8 rounded-lg border-2 bg-transparent border-${color}-${shade}`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
