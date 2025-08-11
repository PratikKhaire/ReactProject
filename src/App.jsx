import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <>
      <div id="container">
        <div className="profile-bg">
          <div id="profile">
            <div id="person">
              <img
                src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90fGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <h1>UserName</h1>
            <h3>Technical Manager</h3>
            <div className="social-icons">
              <FaFacebook />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
