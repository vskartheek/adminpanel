import React from 'react'
import  "./widgetLg.css"
const WidgetLg = () => {
  const Button=({type})=>{
    return <button className={'widgetLgButton '+type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">kartheek</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$1600</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">kartheek</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$1600</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">kartheek</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$1600</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">kartheek</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$1600</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">kartheek</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">$1600</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg