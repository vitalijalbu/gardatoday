import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CityCard = ({data}) => {
  return (
    <div>
      <Link href={`/hosts/${data.id}`}>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
            <img src="https://via.placeholder.com/800" width="1800" height="1200" alt=""/>
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">{data.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
    </Link>
</div>
            );
};

export default CityCard;