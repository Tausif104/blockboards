import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import lineShapeBottom from './images/line-shape-bottom.png'
import lineShapetop from './images/line-shape-top.png'

const RoadmapItem = ({ item, inverted, roadmapCount }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.description}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={`${
          inverted ? 'roadmap-normal' : 'roadmap-inverted'
        } roadmap-item-${roadmapCount} roadmap-item-common`}
      >
        <div className='date'>{item.date}</div>
        <div className="circle"></div>
        <div className="description-box">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <Button variant='inline' onClick={handleShow}>
            Read more
          </Button>
          <img className='line-shape-bottom' src={lineShapeBottom} alt="" />
          <img className='line-shape-top' src={lineShapetop} alt="" />
        </div>
      </div>
    </>
  )
}

export default RoadmapItem
