import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'

const fontSize = [
  'text-xxs',
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl'
]

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

const items = [
  {title: 'Header 1', element: <h1>What we think, we become</h1>},
  {title: 'Header 2', element: <h2>What we think, we become</h2>},
  {title: 'Header 3', element: <h3>What we think, we become</h3>},
  {title: 'Header 4', element: <h4>What we think, we become</h4>},
  {title: 'Header 5', element: <h5>What we think, we become</h5>},
  {title: 'Header 6', element: <h6>What we think, we become</h6>},
  {
    title: 'Paragraph',
    element: (
      <p className="whitespace-normal">
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nullam id dolor id nibh ultricies vehicula
      </p>
    )
  },
  ...palette.map(color => {
    return {
      title: `Text ${color}`,
      element: (
        <div className="flex flex-col">
          <div className={`text-${color}-400 font-light mb-2`}>
            Every moment is a fresh beginning
          </div>
          <div className={`text-${color}-500 font-normal mb-2`}>
            Never regret anything that made you smile
          </div>
          <div className={`text-${color}-600 font-bold mb-2`}>
            Whatever you do, do it well
          </div>
          <div className={`text-${color}-700 font-black`}>
            All limitations are self-imposed
          </div>
        </div>
      )
    }
  })
]

const Index = () => {
  console.log(JSON.stringify(items, null, 2))
  return (
    <Layout>
      <SectionTitle title="UI Elements" subtitle="Typography" />
      <Widget
        title="Default colors"
        description={
          <span>
            Control the font size of an element using the{' '}
            <code>.text-size</code>{' '}utilities. For more information go to <a className="link" target="_blank" href="https://tailwindcss.com/docs/font-size/#app">this url</a>. For text color information go to <a className="link" target="_blank" href="https://tailwindcss.com/docs/text-color/#app">this url</a>.
          </span>
        }>
        <table className="table table-auto no-border">
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="text-sm text-secondary">{item.title}</td>
                <td>{item.element}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Widget>
    </Layout>
  )
}
export default withRedux(Index)
