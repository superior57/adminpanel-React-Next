import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import Select from 'react-select'
import {getColor, toRGB} from '../../src/functions/colors'

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

const Index = () => (
  <Layout>
    <SectionTitle title="Forms" subtitle="React Select" />
    <Widget
      title="Simple select"
      description={
        <span>
          Use the <code>&lt;Select /&gt;</code> component for simple
          react selects
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="w-1/4 p-2">
          <Select options={options} 
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: getColor('bg-blue-500'),
                primary25: toRGB(getColor('bg-blue-500'), 0.25),
                primary50: toRGB(getColor('bg-blue-500'), 0.5),
                primary75: toRGB(getColor('bg-blue-500'), 0.75),
                danger: getColor('bg-red-500'),
                dangerLight: toRGB(getColor('bg-red-500'), 0.25)
              }
            })}
          />
        </div>
      </div>
    </Widget>

    <Widget
      title="Multiple select"
      description={
        <span>
          Use the <code>&lt;Select /&gt;</code> component with the <code>isMulti</code> prop for react selects with multiple options
        </span>
      }>
      <div className="flex flex-wrap w-full">
        <div className="w-1/3 p-2">
          <Select
            options={options}
            isMulti={true}
            placeholder="Select multiple..."
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: getColor('bg-blue-500'),
                primary25: toRGB(getColor('bg-blue-500'), 0.25),
                primary50: toRGB(getColor('bg-blue-500'), 0.5),
                primary75: toRGB(getColor('bg-blue-500'), 0.75),
                danger: getColor('bg-red-500'),
                dangerLight: toRGB(getColor('bg-red-500'), 0.25)
              }
            })}
          />
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
