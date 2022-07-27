import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="no-match-wrapper">
      <div className="icon">
        <FontAwesomeIcon icon="fa-solid fa-circle-question" />
      </div>
      <div className="body">We couldn't find that page.</div>
      <div className="link">
        <Link to="/">Return to homepage?</Link>
      </div>
    </div>
  );
}
