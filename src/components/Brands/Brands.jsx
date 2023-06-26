import Slider from 'react-slick'
import LogoOne from './images/1.png'
import LogoTwo from './images/2.png'
import LogoThree from './images/3.png'
import LogoFour from './images/4.png'
import LogoFive from './images/5.png'
import { Col, Container, Row } from 'react-bootstrap'

const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <section className='brand-section'>
      <Container>
        <Row>
          <Col>
            <div className='section-title'>
              <h2>Trusted by the top Projects in web3</h2>
            </div>
            <Slider className='logo-slider' {...settings}>
              <div className='brand-item'>
                <img src={LogoOne} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoTwo} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoThree} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoFour} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoFive} alt='' />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Brands
