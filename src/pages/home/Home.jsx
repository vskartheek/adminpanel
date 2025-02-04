import React from 'react'
import "./home.css"
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import {userData} from "../../dummyData";
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetsSm/WidgetSm';
import WidgetLg from '../../components/widgetsLg/WidgetLg';
const Home = () => {
  return (
    <div className='home'>
        <Featuredinfo/> 
        <Chart  data={userData} title="User Analytics" grid dataKey="Active User"/>   
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>

    </div>
  )
}

export default Home