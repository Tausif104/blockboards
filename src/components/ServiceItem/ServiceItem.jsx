import React from 'react'
import { Col } from 'react-bootstrap'

const ServiceItem = ({ image, title, description }) => {
  return (
    <Col xl={4}>
      <div className='service-item'>
        <img src={image} alt='' />
        <div className='service-item-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}

export default ServiceItem
