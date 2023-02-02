import React, { useRef } from "react";
import Link from "next/link";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";


const Search = ({toggle}) => {
  
  return (
    <div id="Nav">
    <Offcanvas
    isOpen
    toggle={function noRefCheck(){}}
  >
    <OffcanvasHeader toggle={toggle}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
    </div>
  );
};

export default Search;
