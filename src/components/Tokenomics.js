
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import footerbg from "../assets/img/footer-bg.png"

export const Tokenomics = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="tokenomics" id="tokenomics">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tokenomics-bx wow zoomIn">
                        <h2>Tokenomics</h2>
                        <p>Welcome to the thrilling world of $FROSTY, the meme token bringing winter joy to the Avalanche ecosystem!<br></br> $FROSTY is your passport to a vibrant and rewarding winter community on the Avalanche blockchain. Join us</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme tokenomics-slider">
                            <div className="item">
                                
                                <h5>TOTAL SUPPLY: 10,000,000,000</h5>
                            </div>
                            <div className="item">
                                
                                <h5>AIRDROP 2%</h5>
                            </div>
                            <div className="item">
                                
                                <h5>LIQUIDITY 40%</h5>
                            </div>
                            <div className="item">
                                
                                <h5>TEAM 8 %</h5>
                            </div>
                            <div className="item">
                                
                                <h5>MARKETING 15%</h5>
                            </div>
                            <div className="item">
                                
                                <h5>LISTING 10%</h5>
                            </div>
                            <div className="item">

                                <h5>BURN +%</h5>
                            </div>
                            <div className="item">
                                <h5>REFLECT TOKEN 3%</h5>
                            </div>
                            <div className="item">
                                <h5>ECOSYSTEM 25%</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={footerbg} alt="Image" />
    </section>
  )
}
