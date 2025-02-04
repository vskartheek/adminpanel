import React from 'react'
import {NotificationsNone,Settings,Language} from '@mui/icons-material';
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    IAMADMIN
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Settings />
                </div>
                <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="profilePic" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar