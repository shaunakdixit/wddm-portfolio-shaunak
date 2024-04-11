import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaunak Dixit </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently studying Web design and development at Humber College.
            <br />
            I have completed Bachelor of Engineering from Thapar University.
            And I have total 5 years of experience in software engineering in
            companies such as Samsung, Uber and Flipkart.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing ESports
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shaunak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
