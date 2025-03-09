import React, { useEffect, useState } from 'react'
import "./widgetSm.css"
import { Visibility} from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'
const WidgetSm = () => {
    const [newUsers,setNewUsers]=useState([])

    useEffect(()=>{
        const getNewUsers=async ()=>{
            try{
                const res=await axios.get('/users?new=true',{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTYzZjA5NDdjYmZkMjkxOWZhMjRhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTUwMzM2MywiZXhwIjoxNzQyMzY3MzYzfQ.1y32uSxrJFzb9lqJHDudQXicPcJdifWDSX-wjG9huSI"
                    }
                })
            setNewUsers(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getNewUsers();
    },[]);
  return (
    <div  className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map((user)=>(
                <li key={user.id} className="widgetSmListItem">
                <img 
                src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"}
                alt=""
                className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <Link to={`/users/${user.id}`} >
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                   Display
                </button>
                </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default WidgetSm