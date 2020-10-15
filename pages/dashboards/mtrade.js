import React, {useState, useEffect} from 'react'
import {withRedux} from '../../src/lib/redux'
import Layout from '../../src/layouts'
import WidgetTitle from '../../src/components/widget-title'
import Searchbar from '../../src/components/searchbar'
import Tabtypes from '../../src/components/tabtypes'
import Table1 from '../../src/components/dashboard-2/table-1'
import LineChart1 from '../../src/components/dashboard-2/line-chart-1'
import TextWidget from '../../src/components/dashboard-2/text-widget'
import List1 from '../../src/components/dashboard-2/list-1'
import ProgressBarWidget from '../../src/components/dashboard-2/progress-bar-widget'
import DoughnutChart1 from '../../src/components/dashboard-2/doughnut-chart-1'
import Table2 from '../../src/components/dashboard-2/table-2'
import {NotificationManager} from 'react-notifications'
import MagicGrid from "react-magic-grid"



import {
  DefaultTabs,
  UnderlinedTabs,
  IconTabs,
  Pills,
  VerticalTabs
} from '../../src/components/tabs'
import Widget from '../../src/components/widget'

const cards = [1, 2, 3]

const Card = ({ item }) => (
  <div class="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2"
    
  >
    {item}
  </div>
)

const Tab0 = () => (
  <div className="w-full lg:p-2">
      <MagicGrid items={cards.length} gutter={0} animate={true}>
      
        <Card item={        
        <div >
          <WidgetTitle title="Orders" description="Buy/sell today" />
          <DoughnutChart1 title="Description" subtitle="By country" />
        </div>      }  />
            
        <Card item={        
        <div>
          <WidgetTitle title="Orders" description="Buy/sell today" />
          <List1 />
        </div>      }  />
              
        <Card item={        
        <div >
          <WidgetTitle title="Orders" description="Buy/sell today" />
          <List1 />
        </div>      }  />
    </MagicGrid>
  <Searchbar />
  <Tabtypes />


</div>
)

const Tab1 = () => (
  <div>
     <div className="w-full lg:p-2">
      <WidgetTitle title="World markets" description="Most popular stocks" />
      <TextWidget />
    </div>
      <div className="flex flex-wrap w-full mb-8 lg:mb-4">
        <div className="w-full mb-8 lg:mb-4 lg:w-1/2 lg:p-2">
          <WidgetTitle title="Orders" description="Buy/sell today" />
          <List1 />
        </div>
        
        <div className="w-full mb-8 lg:mb-4 lg:w-1/2 lg:p-2">
          <WidgetTitle title="Sector performance" description="This month" />
          <ProgressBarWidget />
        </div>
      </div>
  </div>
)

const Tab2 = () => (
  <div className="flex flex-wrap">

        <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
          <DoughnutChart1 title="Description" subtitle="By country" />
        </div>
        <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
        <LineChart1 title="Cash Flows" subtitle="Price v/s volume" />
      </div>
      <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
        <LineChart1 title="YAS Calculator" subtitle="Price v/s volume" />
      </div>
        <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
          <WidgetTitle title="Centralized Orderbook" description="My stocks" />
          <Table2 />
        </div>


        <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
          <DoughnutChart1 title="Structure" subtitle="By country" />
        </div>
        <div className="w-full mb-8 lg:mb-4 lg:w-1/4 lg:p-2">
        <LineChart1 title="Historic Prices" subtitle="Price v/s volume" />
      </div>

  </div>
)



const tabs = [
  {index: 0, title: 'New Tab', active: true, content: <Tab0 />},
  {index: 1, title: 'Blotter', active: false, content: <Tab1 />},
  {index: 2, title: 'ISS', active: false, content: <Tab2 />},
  {index: 3, title: '+', active: false, content: <Tab2 />}
]








const Dashboard2 = () => {
  const [message, didShow] = useState(false)
  useEffect(() => {
    if (message) return
    NotificationManager.success('Good day, Lucas!', null, 1500)
    didShow(true)
  }, [message])
  return (
    <Layout>

    <Widget>
      <div className="flex flex-wrap">
        <div className="w-full">
          <UnderlinedTabs tabs={tabs} />
        </div>
      </div>
    </Widget>
    

    </Layout>
  )
}
export default withRedux(Dashboard2)
