import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

const Meteo = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (value) => {
    //console.log('tabs', value)
    if (activeTab !== value) {
      setActiveTab(value);
    }
  };
  return (
    <div className="page">
      <div className="page-content">
        <section className="uk-section uk-section-small">
          <Container>
            <Row>
              <Col>
                <h1 className="page-title">
                  Previsioni meteo prossimi 6 giorni
                </h1>
              </Col>
            </Row>
            <div>
              <Nav justified pills tabs className="py-2">
                <NavItem>
                  <NavLink
                    href="#"
                    value="1"
                    onClick={(e) => toggleTab(e.target.getAttribute("value"))}
                    active={activeTab === "1"}
                  >
                    Oggi{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    value="planimetry"
                    onClick={(e) => toggleTab(e.target.getAttribute("value"))}
                    active={activeTab === "planimetry"}
                  >
                    Martedì{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    value="video"
                    onClick={(e) => toggleTab(e.target.getAttribute("value"))}
                    active={activeTab === "video"}
                  >
                    Mercoledì{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    value="tour"
                    onClick={(e) => toggleTab(e.target.getAttribute("value"))}
                    active={activeTab === "tour"}
                  >
                    Giovedì{" "}
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab="1">
                <TabPane tabId="1">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPane>
                <TabPane tabId="2">dede</TabPane>
              </TabContent>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Meteo;
