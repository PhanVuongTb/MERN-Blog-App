import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-col">
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quo voluptatum, ullam quam perspiciatis deleniti obcaecati
            architecto, sed minus culpa autem suscipit rem vero voluptas alias
            animi. Iure, eaque dicta!
          </p>
        </div>
        <div className="footer-col">
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>YouTube: WebDevMania</span>
          <span>GitHub: WebDevMania</span>
        </div>
        <div className="footer-col">
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: Bulgaria</span>
          <span>Current Location: Bulgaria</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
