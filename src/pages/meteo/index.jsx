import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";



const Meteo = () => {
  return (
    
    <div className="page">
    <div className="page-content">
     <section className="uk-section uk-section-small">
   <Container>
   <Row>
     <Col>
       <h1 className="page-title">Meteo</h1>
     </Col>
     </Row>
     <div>
  <Nav tabs pills>
    <NavItem>
      <NavLink
        className="active"
        onClick={function noRefCheck(){}}
      >
        Tab1
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        More Tabs
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab="1">
    <TabPane tabId="1">
     
          <h4>
            Tab 1 Contents
          </h4>

    </TabPane>
    <TabPane tabId="2">
     dede
    </TabPane>
  </TabContent>
</div>
   </Container>
 </section>
 
    
     </div>
     </div>
    
  );
};

export default Meteo;
