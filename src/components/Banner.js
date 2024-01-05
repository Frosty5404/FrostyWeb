import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import frostylogobig from "../assets/img/frostylogobig.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "The Meme Coin of the People!", "Crypto Revolution", "Where Every Meme Matters" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Winter is comming!</span>
                <h1>{`$FROSTY`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "the Meme Coin of the People!", "Crypto Revolution", "Where Every Meme Matters" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Frosty Meme Coin community embraces principles of mutual support, kindness, cryptocurrency education, fundraising initiatives, moments of joy, meme creation, and a love for the absurdity of the crypto world. Our unofficial motto is: Freeze Over Ridiculousness Every Day. Join our fantastic community within the Avalanche ecosystem.</p>
                  <button onClick={() => console.log('connect')}>ok! let's Buy It! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={frostylogobig} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
