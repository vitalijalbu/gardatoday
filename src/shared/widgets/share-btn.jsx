import React, { useState } from "react";
import Link from "next/link";
import { ButtonGroup, Button } from "reactstrap";

const ShareButtons = () => {


  return(
    <div className="share-widget mb-3">
      <h5>Condividi</h5>
    <ButtonGroup aria-label="Basic example">
    <Button color="link">Left</Button>
    <Button color="link">Middle</Button>
    <Button color="link">Right</Button>
  </ButtonGroup>
  </div>

)
}
export default ShareButtons;