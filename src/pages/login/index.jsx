import React, { useState, useEffect } from "react";
import { Container, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Index = () => {
   
  return (
    
   <div className="page">
   <div className="page-content py-5">
   <Container>
    <Row>
      <div className="mx-auto col-md-4">
        <h3>Accedi al tuo account</h3>
        <div className="d-flex justify-content-between py-3">
          <Button block outline>Google</Button>
          <Button  block outline>Facebok</Button>
        </div>
   <Form>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button color="primary" block>
      Accedi
    </Button>
  </Form>
  </div>
  </Row>
  </Container>
    </div>
    </div>
    
  );a
};

export default Index;
