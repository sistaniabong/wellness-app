import React from 'react';
import Auth from "../../utils/auth";

const Header = () => {
  // function for logout button
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="teal lighten-2 mb-4 py-5 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="m-0">⏰ Blockout</h1>
            <span className="m-0">Live each day as if it were a gift. </span>
        </div>
      </div>
      {/* ternary for logout button */}
        {Auth.loggedIn? (
            <button
            className="m-6 waves-effect waves-light btn-floating"
            style={{ borderRadius: "10px", width: "50px" }}
            onClick={logout}
            
          >Logout</button>
        ): null } 
      
    </header>
  );
};

export default Header;