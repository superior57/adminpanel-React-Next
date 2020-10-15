import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'
import Widget from '../../src/components/widget'
import countries from '../../src/json/countries.json'

const fields = [
  {
    name: 'Code',
    key: 'alpha3Code'
  },
  {
    name: 'Name',
    key: 'name'
  },
  {
    name: 'Capital',
    key: 'capital'
  },
  {
    name: 'Region',
    key: 'region'
  },
  {
    name: 'Population',
    key: 'population'
  }
]

const DefaultTables = () => (
  <Layout>
    <SectionTitle title="Tables" subtitle="Default tables" />

    <Widget
      title="Default table"
      description={
        <span>
          Use the <code>.table</code> class for simple
          tables
        </span>
      }>
      <table className="table">
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.slice(0, 8).map((country, i) => (
            <tr key={i}>
              {fields.map((field, j) => (
                <td key={j}>{country[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Widget>

    <Widget
      title="Default table"
      description={
        <span>
          Use the <code>.table-lg</code> class for larger tables
        </span>
      }>
      <table className="table table-lg">
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.slice(0, 8).map((country, i) => (
            <tr key={i}>
              {fields.map((field, j) => (
                <td key={j}>{country[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Widget>

    <Widget
      title="Default table"
      description={
        <span>
          Use the <code>.no-border</code> class to remove borders
        </span>
      }>
      <table className="table no-border">
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.slice(0, 8).map((country, i) => (
            <tr key={i}>
              {fields.map((field, j) => (
                <td key={j}>{country[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Widget>

    <Widget
      title="Default table"
      description={
        <span>
          Use the <code>.striped</code> class for striped tables
        </span>
      }>
      <table className="table no-border striped">
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.slice(0, 8).map((country, i) => (
            <tr key={i}>
              {fields.map((field, j) => (
                <td key={j}>{country[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Widget>

  </Layout>
)
export default withRedux(DefaultTables)
