import React from "react";
import { LineStyle, TrendingUp, Timeline, PermIdentity, Storefront, CurrencyRupee, BarChart, MailOutline, Feedback, ChatBubbleOutline, WorkOutline, Report } from "@mui/icons-material";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <u1 className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" /> Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              sales
            </li>
          </u1>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <u1 className="sidebarList">
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" /> Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <CurrencyRupee className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </u1>
          <h3 className="sidebarTitle">Notifications</h3>
          <u1 className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </u1>
          <h3 className="sidebarTitle">stuff</h3>
          <u1 className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </u1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
