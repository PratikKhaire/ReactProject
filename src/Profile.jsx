import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import React from "react";

function Profile({ name, title, pic }) {
  return (
    <>
      <div className="profile-bg">
        <div id="profile">
          <div id="person">
            <img src={pic} alt="" />
          </div>
          <h1>{name}</h1>
          <h3>{title}</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
