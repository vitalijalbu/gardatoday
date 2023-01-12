import React, { useState, useEffect } from "react";
import { request, gql } from 'graphql-request'
import CityCard from "@/shared/snippets/city-card";


const Index = () => {
  const[data, setData] = useState([]);



  const query = gql`
  query MyQuery {
    entries(section: "areas") {
      id
      title
    }
  }  
`

useEffect(() => {
  request('https://francescos85.sg-host.com/api/v1/', query).then((data) => setData(data))
}, [])



  return (
   <div className="page">
    <section className="uk-section uk-section-small">
  <div className="uk-container">
    <div className="page-head uk-grid-small uk-flex-middle uk-margin-bottom">
      <h2 className="page-title">Comuni</h2>
    </div>
    {Array.isArray(data.entries) ? (
         <div className="uk-grid"> 
          {data.entries.map((item, i) => (
            <CityCard data={item} key={i}/>
          ))}
        </div>
      ) : (
        <p strong>Nessun dato</p>
      )}
  </div>
</section>

   
    </div>
    
  );
};

export default Index;
