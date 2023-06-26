import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import AboutThumb from './about-thumb.svg'
import BlueShape from './shapes/blue-shape.png'
import PurpleShape from './shapes/purple-shape.png'
import './about.css'

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='shapes'>
        <img className='blue-shape position-absolute' src={BlueShape} alt='' />
        <img
          className='purple-shape position-absolute'
          src={PurpleShape}
          alt=''
        />
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col xl={6}>
            <div className='about-thumbnail'>
              <img src={AboutThumb} alt='' />
            </div>
          </Col>
          <Col xl={6}>
            <div className='about-content'>
              <Link to='/' className='button-border'>
                About us <FaArrowRightLong />
              </Link>
              <h2>We believe in a more transparent future</h2>
              <p>
                Our mission? Reinforce trust in the decentralized world through
                secure, immutable project roadmaps.
              </p>
              <Link to='/' className='primary-btn'>
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
