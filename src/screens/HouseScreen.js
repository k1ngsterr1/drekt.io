import React from "react";

import styles from "../styles/tour-styles/tour.css";

// Assets
import livingRoom from "../assets/living_room.png";
import bathRoom from "../assets/bathroom.png";
import bedRoom from "../assets/bedroom.png";
import hallway from "../assets/hallway.png";
import dressingRoom from "../assets/dressing_room.png";
import kitchen from "../assets/kitchen.png";

const HouseScreen = () => {
  return (
    <div className="house-screen">
      <div className="container">
        <div className="tour-content">
          <h2 className="tour-heading">HOUSE TOUR</h2>
          <div className="rooms">
            {/* Hallway */}
            <span className="line"></span>
            <div className="room-description">
              <h5 className="room-name">Hallway</h5>
              <p className="room-paragraph">
                The initial research efforts in the project definition start
                with the project discovery phase, where our business analysts
                understand the project's purpose and identify the needs of your
                target audience. It helps them choose the right technology
                stack, define the deliverables, and estimate the timelines and
                resources.
              </p>
              <img className="room" src={hallway}></img>
            </div>
            {/* Living Room */}
            <span className="line"></span>
            <div className="room-description">
              <h5 className="room-name">Living Room</h5>
              <p className="room-paragraph">
                After understanding user audience needs, our web designers
                incorporate these requirements in Ul design. Once the app's look
                and feel with project stakeholders is finalized, we breathe life
                into it using front-end coding.
              </p>
              <img className="room" src={livingRoom}></img>
            </div>
            {/* Dressing Room */}
            <span className="line"></span>
            <div className="room-description">
              <h5 className="room-name">Dressing Room</h5>
              <p className="room-paragraph">
                In this stage, we implement the application logic on the back
                end. For this, we use proven frameworks to write fast and
                quality codes.
              </p>
              <img className="room" src={dressingRoom}></img>
            </div>
            {/* Kitchen */}
            <span className="line"></span>
            <div className="room-description">
              <h5 className="room-name">Kitchen</h5>
              <p className="room-paragraph">
                We set up APIs for web app integration to ensure seamless data
                synchronization across third-party systems.
              </p>
              <img className="room" src={kitchen}></img>
            </div>
            {/* Shower Room */}
            <span className="line"></span>
            <div className="room-description">
              <h5 className="room-name">Shower Room</h5>
              <p className="room-paragraph">
                We put your mind at ease by extending hot fixes within 24 hours
                to resolve any issues in the functionality of your web
                application.
              </p>
              <img className="room" src={bathRoom}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseScreen;
