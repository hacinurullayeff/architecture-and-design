import React from "react";
import person1 from "../images/person-1.jpg";
import person2 from "../images/person-2.jpg";
import person3 from "../images/person-3.jpg";

const Team = () => {
  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="line"></div>
      <div className="container">
        <div className="cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={person1} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Front End Developer</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sunt quo obcaecati recusandae numquam et officiis!
                  Nesciunt optio provident consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={person2} />
              </div>
              <div className="flip-card-back">
                <h1>Lorem Ipsum</h1>
                <p>Full Stack Developer</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sunt quo obcaecati recusandae numquam et officiis!
                  Nesciunt optio provident consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={person3} />
              </div>
              <div className="flip-card-back">
                <h1>Lorem Ipsum</h1>
                <p>Designer</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sunt quo obcaecati recusandae numquam et officiis!
                  Nesciunt optio provident consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
