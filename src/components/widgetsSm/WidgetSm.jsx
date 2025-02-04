import React from 'react'
import "./widgetSm.css"
import { Visibility} from '@mui/icons-material'
const WidgetSm = () => {
  return (
    <div  className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="pic1" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">kartheek</span>
                    <span className="widgetSmUserTitle">engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="pic1" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Tarun</span>
                    <span className="widgetSmUserTitle">CN</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="pic1" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">likith</span>
                    <span className="widgetSmUserTitle">java dev</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="pic1" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">mahesh</span>
                    <span className="widgetSmUserTitle">annitlo dev</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="pic1" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">madan</span>
                    <span className="widgetSmUserTitle">gold medalist</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm