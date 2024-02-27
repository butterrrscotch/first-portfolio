// App.js

import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* First Part */}
      <div
        className="section 1"
        style={{
          backgroundColor: "rgb(49,49,49)",
          textAlign: "center",
        }}
      >
        <div>
          <h1 className="resume-heading">Resume</h1>
          <h2 className="resume-subtitle">Nadya | People Analyst</h2>
        </div>
      </div>

      {/* Second Part */}
      <div
        className="section 2"
        style={{
          backgroundColor: "rgb(244,240,237)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            src={require("./image/profile_photo.JPG")}
            alt="Nadya's Photo"
            className="profile-img"
          />
        </div>
        <div>
          <h2>Hello,</h2>
          <h3>I’m Nadya, a People Analyst at GoTo Financial. </h3>
        </div>
      </div>

      {/* Third Part */}
      <div
        className="section 3"
        style={{
          backgroundColor: "rgb(49,49,49)",
          display: "flex",
          flexDirection: "row" /* Set flex direction to row */,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h2>Education</h2>
          <div className="education-box">
            <p>IPB University</p>
            <p>Communication & Community Development Sciences</p>
            <p>Bogor, Indonesia</p>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skills-box">
            <p>+1234567890</p>
            <p>nadyadhyanti@gmail.com</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div>
          <h2>Get in Touch</h2>
          <div className="contact-box">
            <p>+1234567890</p>
            <p>nadyadhyanti@gmail.com</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
