import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/account/side-nav';


  const Impostazioni = () => {
 
    return (
   
      <Container>
<div className="row g-5">
<div className="col-md-4">
    <div className="position-sticky" style={{ top: "2rem" }}>
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="">Il mio account</h4>
      </div>
      <div className="p-4">
      <SideNav/>
      </div>
    </div>
  </div>
  <div className="col-md-8">
    <h3 className="pb-4 mb-4 border-bottom">Impostazioni</h3>
    <div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        Account
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className="active"
        onClick={function noRefCheck(){}}
      >
        Password & Sicurezza
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className="active"
        onClick={function noRefCheck(){}}
      >
        Notifiche
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab="2">
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <h4>
            Tab 1 Contents
          </h4>
        </Col>
      </Row>
    </TabPane>
    <TabPane tabId="2">
      <Row>
        <Col sm="6">
         example
        </Col>
      </Row>
    </TabPane>
  </TabContent>
</div>
  </div>

</div>

      </Container>

    );
};

export default Impostazioni;
