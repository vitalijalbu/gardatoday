import React, { useState } from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import { IconBrandWhatsapp, IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';


const ShareButtons = (props) => {


  return(
    <div className="share-widget mb-3">
      {props.title && (
                  <h5>Condividi</h5>
                )}
<div className="d-flex">
<Button outline className="social-facebook btn-social"><IconBrandFacebook color="#fff"/></Button>
    <Button outline className="social-twitter btn-social"><IconBrandTwitter color="#fff"/></Button>
    <Button outline className="social-linkedin btn-social"><IconBrandLinkedin color="#fff"/></Button>
    <Button outline className="social-whatsapp btn-social">
    <IconBrandWhatsapp color="#fff"/>
    </Button>
  </div>
  </div>

)
}
export default ShareButtons;