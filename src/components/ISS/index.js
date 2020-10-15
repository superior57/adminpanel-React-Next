import React from 'react'
import HistoricPrices from './historic-prices'
import ISSDescription from './description'
import ISSStructure from './structure'
import ChasFlows from './cashflows'
import YasCalculator from './yas-calculator'
import CentralizedOrderbook from './centralized-orderbook'
import MagicGrid from 'react-magic-grid'

const Card = ({ item }) => (
  <div class="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2 shadow widget">{item}</div>
)

function ISSWorkspace(props) {
  console.log(props)
  console.log(props.data.title)

  return (
    <>
      <MagicGrid items={props.data.content.length} gutter={0} animate={false}>
        {props.data.content.map((component) => {

          const commonprops = {
              data: component,
              isin: props.data.isin
          }
   
          if (component.type == 'iss-description') {
            console.log(component.type)
            return (
              <Card item={<ISSDescription {...commonprops}></ISSDescription>} />
            )
          } else if (component.type == 'iss-cashflows') {
            return (
              <Card item={<ChasFlows {...commonprops}></ChasFlows>} />
            )
          } else if (component.type == 'iss-yas-calculator') {
            return (
              <Card item={<YasCalculator {...commonprops}></YasCalculator>} />
            )
          } else if (component.type == 'iss-centralized-orderbook') {
            return (
              <Card item={<CentralizedOrderbook {...commonprops}></CentralizedOrderbook>} />
            )
          } else if (component.type == 'iss-structure') {
            return (
              <Card item={<ISSStructure {...commonprops}></ISSStructure>} />
            )
          } else if (component.type == 'iss-historic-price') {
            return (
              <Card item={<HistoricPrices {...commonprops}></HistoricPrices>} />
            )
          } else {
            return (
              <Card item={<HistoricPrices {...commonprops}></HistoricPrices>} />
            )
          }
        })}
      </MagicGrid>
    </>
  )
}

export default ISSWorkspace
