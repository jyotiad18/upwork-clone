import React from "react";
import "./LeftBar.css";

function LeftBar() {
  return (
    <div className="leftBar">
      <p>COVID-19</p>
      <div className="leftBar__menu">
        <h5 className="leftBar__title">My Feed</h5>
        <h5 className="leftBar__title">Recent Searches</h5>
        <h5 className="leftBar__title">Recommended</h5>
      </div>      
      <div className="leftBar__recentSearch">      
      </div>
    </div>
  );
}

export default LeftBar;
