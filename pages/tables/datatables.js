import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Datatable from '../../src/components/datatable'
import countries from '../../src/json/countries.json'
import Widget from '../../src/components/widget'
import {formatNumber} from '../../src/functions/numbers'

const Simple = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Code',
        accessor: 'alpha3Code'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Capital',
        accessor: 'capital'
      },
      {
        Header: 'Region',
        accessor: 'region'
      },
      {
        Header: 'Population',
        accessor: 'population',
        Cell: props => <span>{formatNumber(props.value)}</span>
      }
    ],
    []
  )
  const data = React.useMemo(() => countries, [])
  return <Datatable columns={columns} data={data} />
}

const Index = () => (
  <Layout>
    <SectionTitle title="Tables" subtitle="Datatables" />
    <Widget
      title="Datatable example"
      description={
        <span>
          Use the <code>&lt;Datatable /&gt;</code> component to create a data table
        </span>
      }>
      <Simple />
    </Widget>
  </Layout>
)
export default withRedux(Index)
