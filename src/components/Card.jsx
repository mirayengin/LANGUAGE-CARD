import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Images from "./Images";
import { data } from "../helpers/data";

const Card = () => {
  console.log(data);

  return (
    <Container className="container rounded-4 all" >
          <h1 className='mb-5 text-center'>LANGUAGE CARDS</h1>
      <Row className="g-3 rowDiv">
        {data.map((item, index) => {
          return (
            <Col className="colDiv" key={index} sx={12} sm={6} md={4} lg={3}>
              <Images {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
