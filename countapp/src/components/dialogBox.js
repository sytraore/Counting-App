import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import seseme from '../assests/seseme.gif';
import "../styles/dialogbox.css";

function DialogBox(props) {
  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Row>
          <Col sm={4}> {/* Column for the image */}
            <img
              src={seseme}
              alt="image3"
              className="img-fluid"
              style={{ width: 'auto', height: '90%' }}
            />
          </Col>
          <Col sm={8}> {/* Column for the text */}
            <h4>Great job!</h4>
            <p>
              You were so helpful! Are you ready for the next part?
            </p>
          </Col>
        </Row>
    </Modal.Body>
    <Modal.Footer>
        <button className='dialogbutton' onClick={props.onHide}><Link to={`/game/home`}>Home</Link></button>
        <button className='dialogbutton' onClick={props.onHide}><Link to={`/game/${props.page}/0`}>Next Section</Link></button>
    </Modal.Footer>
  </Modal>
  );
}


export default DialogBox;
