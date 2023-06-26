import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './hero.css'
import ParticlesWrapper from '../Particles/ParticlesWrapper'

const Hero = () => {
  return (
    <section className='banner-section'>
      <ParticlesWrapper id='tsparticles' />
      <Container>
        <Row>
          <Col xl={12}>
            <div className='banner-content'>
              <Link to='/' className='button-border'>
                Explore roadmaps
              </Link>
              <h1>
                Roadmaps Belong on <br /> the Blockchain
              </h1>
              <p>Welcome to product roadmaps in web3</p>
              <Link to='/' className='primary-btn'>
                Explore
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
