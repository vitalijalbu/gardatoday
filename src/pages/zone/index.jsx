import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CityCard from "@/shared/snippets/city-card";
import { getAllAreas } from "@/lib/graphql/queries/areas";


const Index = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getAllAreas()
      .then((data) => {
        setEntries(data?.entries);
        //console.log("🐝 API response CATEGORIES", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
   <div className="page">
   <div className="page-content">

  <Container>
  <Row>
    <Col>
      <h1 className="page-title">Comuni del Lago di Garda</h1>
      <p>Sfoglia le ultime notizie del tuo comune</p>
    </Col>
    </Row>

    {Array.isArray(entries) ? (
         <Row> 
          {entries.map((item, i) => (
            <Col lg={4} xs={6} sm={6} className="mb-3">
            <CityCard data={item} key={i}/>
            </Col>
          ))}
        </Row>
      ) : (
        <p strong>Nessun dato</p>
      )}
  </Container>
    </div>
    </div>
    
  );
};

export default Index;
