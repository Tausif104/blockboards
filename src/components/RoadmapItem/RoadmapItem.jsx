import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

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
          inverted ? 'roadmap-inverted' : 'roadmap-normal'
        } roadmap-item-${roadmapCount}`}
      >
        <div>{item.date}</div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
    </>
  )
}

export default RoadmapItem
