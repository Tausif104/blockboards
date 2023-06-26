import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageOne from './images/1.svg'
import ImageTwo from './images/2.svg'
import ImageThree from './images/3.svg'
import ServiceItem from '../ServiceItem/ServiceItem'

const Services = () => {
  return (
    <section className='service-section'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='section-title'>
              <Link className='button-border'>Our Services</Link>
              <h2>Empower your web3 vision</h2>
              <p>
                Harness the power of blockchain technology to share your project
                roadmaps, ensuring absolute transparency and building unwavering
                trust.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <ServiceItem
            image={ImageOne}
            title='Build trust'
            description='Roadmaps can and should change, but transparency around those changes builds trust'
          />
          <ServiceItem
            image={ImageTwo}
            title='Share your vision'
            description='Whether you’re solving financial 
            inequality, or putting out good vibes, share your vision withyour community'
          />
          <ServiceItem
            image={ImageThree}
            title='Proof of Completion'
            description='Demonstrate proof of completion when milestones are shipped'
          />
        </Row>
      </Container>
    </section>
  )
}

export default Services
