import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-address-book" />
            </div>

            <div className="text">
              555-555-5555
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </div>

            <div className="text">
              paige@example.com
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />
            </div>

            <div className="text">
              North Logan, UT 
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-hashtag" />
            </div>

            <div className="text">
              @paigeexample
            </div>
          </div>
        </div>
      </div>  

      <div 
        className="left-column" 
        style={{
          background: "url(" + contactPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </div>
  )
}
