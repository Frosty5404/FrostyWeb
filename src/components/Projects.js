import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/frostybg6.png";
import projImg2 from "../assets/img/frostybg4.png";
import projImg3 from "../assets/img/frostybg2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "10,000,000,000",
      description: "Total Supply",
      imgUrl: projImg1,
    },
    {
      title: "$FROSTY",
      description: "Frosty Project born on AVAX",
      imgUrl: projImg2,
    },
    {
      title: "Community Driven",
      description: "A real community gem, Frostycoin isn't governed by a select few. ❄️🚀",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Project</h2>
                <p>Visualize 10 billion digital flakes swirling in the crypto cold, each named $FROSTY. This total supply aims to fill the virtual space with the enchantment of winter.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frosty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Deflactionary</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>$FLOKI token contract is: </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Introducing the "Deflationary Stewardship Protocol." Picture this: every burned token embarks on a purposeful journey to a secure burn wallet, akin to a financial sanctum with restricted access. Recognized as a preeminent holder, this inanimate repository duly garners proportionate transactional rewards. The incineration process unfolds seamlessly with each transaction and gains momentum commensurate with the wallet's expansion, perpetually. This meticulous orchestration ensures a sustainable and perpetually evolving mechanism within the crypto landscape.
                      <br /> Burn Wallet:  </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
