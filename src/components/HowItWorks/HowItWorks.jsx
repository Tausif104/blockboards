import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageOne from './1.png'
import ImageTwo from './2.png'
import ImageThree from './3.png'

const HowItWorks = () => {
  return (
    <section className='how-it-works'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='section-title'>
              <h2>How does it work?</h2>
              <p>Getting started is easy</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className='how-item how-item-one'>
              <div className='how-item-one-inner'>
                <Link to='/' className='button-border'>
                  Step 1:
                </Link>
                <h3>Enter your roadmap details</h3>
                <p>Break down project roadmaps into milestones.</p>
                <p>
                  Optionally set target launch dates (date, month, quarter,
                  etc.)
                </p>
              </div>
              <img src={ImageOne} alt='' />
            </div>
          </Col>
          <Col xl={6}>
            <div className='how-item how-item-two'>
              <div className='how-item-two-inner'>
                <img src={ImageTwo} alt='' />
                <div className='how-item-two-content'>
                  <Link to='/' className='button-border'>
                    Step 2:
                  </Link>
                  <h3>Sign in with Ethereum</h3>
                  <p>Connect with your favorite web3 wallet</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className='how-item how-item-three'>
              <div className='how-item-three-inner'>
                <div className='how-item-three-content'>
                  <Link to='/' className='button-border'>
                    Step 3:
                  </Link>
                  <h3>Sign in with Ethereum</h3>
                  <p>Connect with your favorite web3 wallet</p>
                </div>
              </div>
              <img src={ImageThree} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HowItWorks
