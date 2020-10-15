import React, {useState, useEffect} from 'react'
import {withRedux} from '../../src/lib/redux'
import Layout from '../../src/layouts'
import WidgetTitle from '../../src/components/widget-title'
import Table1 from '../../src/components/dashboard-2/table-1'
import LineChart1 from '../../src/components/dashboard-2/line-chart-1'
import TextWidget from '../../src/components/dashboard-2/text-widget'
import List1 from '../../src/components/dashboard-2/list-1'
import ProgressBarWidget from '../../src/components/dashboard-2/progress-bar-widget'
import DoughnutChart1 from '../../src/components/dashboard-2/doughnut-chart-1'
import Table2 from '../../src/components/dashboard-2/table-2'
import {NotificationManager} from 'react-notifications'

const Dashboard2 = () => {
  const [message, didShow] = useState(false)
  useEffect(() => {
    if (message) return
    NotificationManager.success('Good day, Lucas!', null, 1500)
    didShow(true)
  }, [message])
  return (
    <Layout>
      <div className="w-full lg:p-2">
        <Table1 />
      </div>

      <div className="w-full mb-8 lg:mb-4 lg:p-2">
        <LineChart1 title="Stock performance" subtitle="Price v/s volume" />
      </div>

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

      <div className="flex flex-row flex-wrap">
        <div className="w-full mb-8 lg:mb-4 lg:w-1/2 lg:p-2">
          <DoughnutChart1 title="Commodities" subtitle="By country" />
        </div>
        <div className="w-full mb-8 lg:mb-4 lg:w-1/2 lg:p-2">
          <WidgetTitle title="Portfolio" description="My stocks" />
          <Table2 />
        </div>
      </div>
    </Layout>
  )
}
export default withRedux(Dashboard2)
