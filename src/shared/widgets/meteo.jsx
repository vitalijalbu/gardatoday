import React, { useState } from "react";
import * as dayjs from 'dayjs';
import Link from "next/link";
import { Card, CardHeader, CardBody, Button } from "reactstrap";


const WidgetMeteo = ({ title, slug }) => {


  return(
    <Card>
    <CardBody>
    <div className="d-flex">
              <h6 className="flex-grow-1">Meteo della zona {title}</h6>
              <h6>{dayjs().format('H:m')}</h6>
            </div>
    </CardBody>
    <CardBody>
        <div className="card" style={{ color: "#4B515D", borderRadius: 35 }}>
          <div className="card-body p-4">

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6
                className="display-4 mb-0 font-weight-bold"
                style={{ color: "#1C2331" }}
              >
                {" "}
                13°C{" "}
              </h6>
              <span className="small" style={{ color: "#868B94" }}>
                Stormy
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1"> 40 km/h</span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1"> 84% </span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1"> 0.2h </span>
                </div>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/600"ttps://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>

    </CardBody>
    <CardBody>
      <Link classname="btn btn-block" href="/meteo?area=desenzano">Vedi meteo della settimana</Link>
    </CardBody>
  </Card>
)
}
export default WidgetMeteo;