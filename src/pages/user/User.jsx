import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationCity,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
        <button className="userAddButton">Create</button>
        </Link>
      
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">sai kartheek</span>
              <span className="userShowUserTitle">software engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">kartheek19</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">19.06.2004</span>
            </div>
            <span className="userShowTitle">Contact details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">9014774739</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Kartheek@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCity className="userShowIcon" />
              <span className="userShowInfoTitle">guntur</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username: </label>
                <input
                  type="text"
                  placeholder="kartheek19"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name </label>
                <input
                  type="text"
                  placeholder="kartheek"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Kartheek@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="9014774739"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="guntur"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                  <img src="https://ew.com/thmb/LENKPr0gQ_Ja07A87DQObaGJHbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-bale-892a7608489d4845a9f13f9c3eb2a5a8.jpg" alt="" 
                  className="userUpdateImg" />
                  <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
