import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nazar Havryliuk </span>
            from <span className="purple"> Kyiv, Ukraine.</span>
            <br />I am a Software Engineer pursuing Master Degree in Applied Maths and Data Science in Kyiv Polytechnic Institute.
            <br />
            <br />
            Apart from coding, I am interested in
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning about new Tech and fields
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaining knowledge about cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Na3aga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
