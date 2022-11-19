import { IoTrashOutline } from "react-icons/io5";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PropertyRow = ({ property, deleteProperty, updateProperty }) => {
  const [show, setShow] = useState(false);
  const [propertyrow, setProperty] = useState(property);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const handleChangePrice = (e) => {
    setProperty({...propertyrow, price: e.target.value})
  }
  const handleChangeTitle = (e) => {
    setProperty({...propertyrow, title: e.target.value})
  }

  const modifyProp = async () => {
    await updateProperty(propertyrow)
    handleClose()
  }


  return (
    <>
      <tr>
        <td>{property.user}</td>
        <td>{property.price}</td>
        <td className="d-flex align-items-center justify-content-between">
          {property.title}
          <div>
            <BsBoxArrowUpRight
              onClick={handleShow}
              className="me-3"
              style={{ cursor: "pointer" }}
            />
            <IoTrashOutline
              onClick={() => deleteProperty(property)}
              className=""
              style={{ cursor: "pointer" }}
            />
          </div>
        </td>
      </tr>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Property Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={handleChangeTitle} defaultValue={property.title}/>
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
                <Form.Control type="number" onChange={handleChangePrice} defaultValue={property.price} />
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={modifyProp}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PropertyRow;
