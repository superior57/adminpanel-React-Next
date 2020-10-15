import React from 'react'
import LineChart1 from '../../dashboard-2/line-chart-1'

function HistoricPrices(props)  {
    console.log(props);  
    
    return <>    
        
        <LineChart1 title={props.data.title} subtitle="Historic Prices" />
    </>
    
    };

export default HistoricPrices;