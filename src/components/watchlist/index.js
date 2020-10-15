import React from 'react'
import HistoricPrices from '../ISS/historic-prices'
import MagicGrid from 'react-magic-grid'

const Card = ({ item }) => (
  <div class="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2 shadow widget">{item}</div>
)

function WatchlistWorkspace(props) {
  console.log(props)
  console.log(props.data.title)

  return (
    <>
      <MagicGrid items={props.data.content.length} gutter={0} animate={false}>
        {props.data.content.map((component) => {
          {
            component.type
          }
          if (component.type == 'iss-description') {
            console.log(component.type)
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else if (component.type == 'iss-cashflows') {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else if (component.type == 'iss-yas-calculator') {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else if (component.type == 'iss-centralized-orderbook') {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else if (component.type == 'iss-structure') {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else if (component.type == 'iss-historic-price') {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          } else {
            return (
              <Card item={<HistoricPrices data={component}></HistoricPrices>} />
            )
          }
        })}
      </MagicGrid>
    </>
  )
}

export default WatchlistWorkspace
