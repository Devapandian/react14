import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Switch } from "antd";

const Example =() => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }; 

  return (
    <div className = "container1">
      <Button variant="primary" onClick={handleShow}>
        Library
      </Button>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Library</h2>
          </Modal.Title>

          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <Switch  />  <span><h6>Team Library</h6></span>
        <br/>
              <Switch  /> <span><h6>IOS6</h6></span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Example;
