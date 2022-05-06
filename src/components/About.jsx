import React from "react";
import house from "../images/house.png";

const About = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="line"></div>
      <div className="cards">
        <div className="container">
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-pen-nib"></i>
              Interior
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-paintbrush"></i>
              Decoration
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
        </div>
        <div className="containermid">
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-paint-roller"></i>
              Exterior
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
          <img src={house} />
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-hands"></i>
              Planning
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-pencil"></i>
              Design
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
          <div className="card">
            <div className="card-name">
              <i class="fa-solid fa-building"></i>
              Execution
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vel unde aut libero, nulla culpa magni illo rerum sit
              recusandae.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
