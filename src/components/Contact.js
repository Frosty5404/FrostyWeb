import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import frostylogobig from "../assets/img/frostylogobig.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={frostylogobig} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <p>
Welcome to the frosty side of life, where our token plays so nicely with the ERC-20 standard that it could be the digital token's long-lost twin! However, let's be candid – Frosty is like that travel buddy who joined the journey just for kicks; it has no functions, no utility, and no intrinsic value. Think of it as the friend who brings laughs to the party but doesn't chip in for the pizza.<br />

And speaking of parties, there's no roadmap here. Our Frosty is more like a spontaneous adventure without a predetermined destination. Don't worry, that just means each day is a new surprise on Frosty's thrilling ride!<br />

In a nutshell, investing in Frosty is like a roller coaster ride: exciting, a bit unpredictable, and no guarantees of hitting the jackpot. So, if you're up for a journey with no expectations of financial returns or dividends, join us and let yourself be carried away by the frosty fun. We may not promise an ecosystem, but we do promise laughter! ❄️💸😄</p>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
