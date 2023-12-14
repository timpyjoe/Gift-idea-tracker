import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function DeleteButton({ gifteeId }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState("")

  const handleCancel = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    if (formData === "Delete") {
      const deleteGiftee = fetch(`/api/giftee/${gifteeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
      )
      setShow(false);
      window.location.href = '/user'
    }
  }
  return (
    <>
      <Button className="delete-giftee-btn" variant="danger" onClick={handleShow}>
        Delete Giftee
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="deleteForm.text"
            >
              <Form.Label>Deleting this giftee will permanantly remove their records from our database. If you are certain you would like to do this, type "Delete" into the field below</Form.Label>
              <Form.Control rows={3} onChange={(e) => setFormData(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="submit-btn" variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button className="submit-btn" variant="primary" onClick={handleClose}>
            Send Them Off
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton