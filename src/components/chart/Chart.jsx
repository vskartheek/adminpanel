import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {
    
  return (
    <div className='chart' >
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="blue"/>
                <Line type="monotone" dataKey={dataKey} stroke="blue"/>            
                <Tooltip/>
    {grid && <CartesianGrid stroke="#5555" strokeDasharray="5 5"/> }                   
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;