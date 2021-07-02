import React from "react";
import imgpic from '../download.jpg'

const Header = () => {
  return (
    <div className="header-container">
       <div>
        <img src={imgpic}/>
      </div>
      <h3>My TODO List</h3>
    </div>
  );
};
export default Header;
