import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import frostylogoweb from "../assets/img/frostylogoweb.png";
import x from "../assets/img/x.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={frostylogoweb} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com/FrostyAvaxMeme"><img src={x} alt="Icon" /></a>
             
              
              
            </div>
            <p>$Frosty, original meme coin on AVAX! </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
