import React from "react";
import Table from "react-bootstrap/Table";
import PropertyRow from "./PropertyRow";
import { BiEuro } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import axios from 'axios'
import { useState, useEffect } from 'react'
import FormProperty from "./FormProperty";

const ListProperty = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("properties/")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() => alert("Algo fue mal en get"));
  }, []);

  const addProperty = (property) => {
    axios
    .post("properties/", property)
    .then((response) => {
      setProperties(properties.concat(response.data))
    })
    .catch(() => alert("Algo fue mal en post"))
  }

  const deleteProperty = (property) => {
    axios.delete(`properties/${property.id}`)
    .then((response)=>{
      const newProps = properties.filter( prop => prop.id !== property.id)
      setProperties(newProps)
    }).catch(() => alert("Algo salió mal en delete"))
  }


  const updateProperty = (property) => {
    axios
      .put(`properties/${property.id}`, property)
      .then((response) => {
        // const tempPropers = [...properties]
        // tempPropers.find(proper => proper.id === property.id)
        const nuevas = properties.map(proper => {
          if(proper.id !== property.id) return proper
          return {
            "id": property.id,
            "price":property.price,
            "title": property.title,
            "description":"",
            "user":property.user
          } 
        })
        setProperties(nuevas);
      })
      .catch(() => alert("Algo salió mal en put"));
  };

  

  return (
    <div className="container">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Owner <CgProfile /></th>
            <th>Price <BiEuro/></th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => {
            return <PropertyRow property={property} key={property.id} deleteProperty={deleteProperty} updateProperty={updateProperty}/>;
          })}
        </tbody>
      </Table>
      <FormProperty createProperty={addProperty}/>
    </div>
  );
};

export default ListProperty;
