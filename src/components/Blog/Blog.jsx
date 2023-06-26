import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogItem from '../BlogItem/BlogItem'
import ImageOne from './images/1.png'
import ImageTwo from './images/2.png'
import ImageThree from './images/3.png'

const Blog = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <section className='blog-section'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='section-title'>
              <Link to='/' className='border-button'>
                Blog
              </Link>
              <h2>Our Latest News</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Slider className='blog-slider' {...settings}>
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
          </Slider>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
