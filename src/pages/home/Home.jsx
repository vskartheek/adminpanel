import React from 'react'
import "./home.css"
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import {userData} from "../../dummyData";
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetsSm/WidgetSm';
import WidgetLg from '../../components/widgetsLg/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  const MONTHS=useMemo(()=>
    ["Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
  ],[]
)
  const [userStats,setUserStats]=useState([]);
  useEffect(()=>{
    const getStats=async ()=>{
        try{
            const res=await axios.get("/users/stats",{
              headers:{
                token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTYzZjA5NDdjYmZkMjkxOWZhMjRhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTUwMzM2MywiZXhwIjoxNzQyMzY3MzYzfQ.1y32uSxrJFzb9lqJHDudQXicPcJdifWDSX-wjG9huSI"
              }
            })
            const statsList=res.data.sort(function (a,b){
              return b._id-a._id;
            })
          statsList.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User":item.total}]))
          }catch(e){
          console.log(e);
        }
    }
    getStats();
  },[MONTHS]);
  return (
    <div className='home'>
        <Featuredinfo/> 
        <Chart  data={userStats} title="User Analytics" grid dataKey="New User"/>   
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>

    </div>
  )
}

export default Home