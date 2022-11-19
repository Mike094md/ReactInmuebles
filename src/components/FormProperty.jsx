import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from 'react'

const FormProperty = ({ createProperty }) => {

  const [property, setProperty] = useState({});

  const handleChangeUser = (event) => {
    setProperty({...property, user: event.target.value})
  }
  const handleChangePrice = (event) => {
    setProperty({...property, price: event.target.value})
  }
  const handleChangeTitle = (event) => {
    setProperty({...property, title: event.target.value})
  }

  const addProperty = (event) => {
    event.preventDefault()
    createProperty(property)
  }

  return (
    <div className="container mt-5">
      <Card className="p-4 w-75 mx-auto">
        <h1 className="text-center">Create Property</h1>
        <Form className="w-75 mx-auto" onSubmit={addProperty}>
          <Form.Group className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control  onChange={handleChangeUser} type="number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={handleChangePrice} type="number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChangeTitle} type="text" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default FormProperty;
