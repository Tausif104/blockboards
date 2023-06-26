import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='contact-section'>
      <Container>
        <Col xl={12}>
          <div className='contact-cta'>
            <Link className='button-border' to='/'>Contact us</Link>
            <h2>Ready to a make it web3 official?</h2>
            <p>
              Join us on our mission to reinforce trust and enhance transparency
              in the decentralized world. Secure your project's journey on the
              blockchain today.
            </p>
            <Link className='primary-btn' to='/'>Get Started</Link>
          </div>
        </Col>
      </Container>
    </section>
  )
}

export default Contact
