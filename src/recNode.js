import React from "react";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

const RecNode = ({obj}) => {
    console.log(obj);
  return (
    <>
      <Card className="my-3 p-3 rounded">

        <Card.Img variant="top" src={obj.imageUrl} alt={obj.name} />

        <Card.Body>
            <Card.Title as="div" className="font-weight-bold">
              {obj.name}
            </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecNode;
