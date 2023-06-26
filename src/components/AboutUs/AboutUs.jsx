import { Col, Container, Row } from 'react-bootstrap'
import AboutThumb from './about-thumb.svg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section className='about-us'>
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
                About us
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
