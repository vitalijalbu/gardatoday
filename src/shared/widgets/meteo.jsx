import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Button } from "reactstrap";

const WidgetMeteo = ({ title }) => {


  return(
    <Card>
    <CardHeader>
      Meteo della zona {title}
    </CardHeader>
    <CardBody>
   esempio
    </CardBody>
    <CardBody>
      <Button color="dark">Pubblica qui</Button>
    </CardBody>
  </Card>
)
}
export default WidgetMeteo;