import { Col, Container, Row } from 'react-bootstrap'
import items from './data'
import RoadmapItem from '../RoadmapItem/RoadmapItem'

const Roadmap = () => {
  return (
    <section className='roadmap-section'>
      <Container>
        <Row>
          <Col>
            <div className='roadmap-content'>
              {items.map((item, index) => (
                <RoadmapItem
                  inverted={index % 2 === 0}
                  roadmapCount={index}
                  item={item}
                  key={index}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Roadmap
