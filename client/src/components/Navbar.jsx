import React, { useState } from "react";
import { Link } from "react-router-dom";
import womanImg from "../assets/woman.jpg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <Link to="/">WebDevMania</Link>
        </div>
        <ul className="navbar-center">
          <li className="navbar-listItem">
            <Link>Home</Link>
          </li>
          <li className="navbar-listItem">
            <Link>About</Link>
          </li>
          <li className="navbar-listItem">
            <Link>Contacts</Link>
          </li>
          <li className="navbar-listItem">
            <Link>Categories</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <img
            onClick={() => setShowModal((prev) => !prev)}
            src={womanImg}
            className="navbar-img"
          />
          {showModal && (
            <div className="navbar-modal">
              <Link to="/create">Create</Link>
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
