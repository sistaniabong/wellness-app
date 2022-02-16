import React from 'react';
import Auth from "../../utils/auth";

const Header = () => {

  return (
    <header className="teal lighten-2 mb-4 py-5 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="m-0" style={{paddingLeft: "30px"}}>⏰ Blockout</h1>
            <span className="m-0">Live each day as if it were a gift. </span>
        </div>
      </div>
      
    </header>
  );
};

export default Header;