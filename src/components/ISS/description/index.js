import React, { useEffect } from 'react'
import Datatable from '../../datatable'
import countries from '../../../json/countries.json'
import Widget from '../../widget'
import { formatNumber } from '../../../functions/numbers'
import {findSecurityBy} from 'src/api.js'
import en from 'src/intl/en.json'



const fields = [
  {
    name: 'Name',
    key: 'fieldname',
  },
  {
    name: 'Value',
    key: 'value',
  }
]

function ISSDescription(props) {

  const [response, setresponse] = React.useState(undefined)
  useEffect(()=>{
  findSecurityBy({"isin":props.isin}).then((apiresponse)=>
    {
      setresponse(apiresponse)
    }).catch(console.log)
  },[])
  return (
    <Widget
      title="Description"
      description={
        <span>
          Use the <code>.striped</code> class for striped tables
        </span>
      }
    >
      {/*
      {JSON.stringify(response)}
      {en.isin}
      */}
      { console.log("API RESPONSE: ", response) }
      <table className="table no-border striped">
        {/*
        <thead>
          <tr>
            {fields.map((field, i) => (
              <th key={i}>{field.name}</th>
            ))}
          </tr>
        </thead>
        */}
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
  )
}
export default ISSDescription
