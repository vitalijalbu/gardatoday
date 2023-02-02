import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Button,
} from 'reactstrap';
import SideMenu from './side-menu';
import { IconHaze, IconMenu, IconUserCircle, IconSearch } from '@tabler/icons-react';
  
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideNav = () => setIsOpen(!isOpen);


  return (
    <>
    {isOpen &&(<SideMenu opened={isOpen} toggle={openSideNav}/>)}
    <div id="site-header">
    <nav className="py-1 bg-light border-bottom">
  <div className="container d-flex flex-wrap">
    <ul className="nav me-auto">
      <li className="nav-item">
        <Link
          href="#"
          className="nav-link link-dark px-2 active"
          aria-current="page"
        >
          <IconHaze/> Meteo
        </Link>
      </li>
    </ul>
    <ul className="nav">
      <li className="nav-item">
        <Link href="/lavoro" className="nav-link link-dark px-2">
          Offerte di Lavoro
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/redazione/contatti" className="nav-link link-dark px-2">
          Contatti
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/advertising" className="nav-link link-dark px-2">
          Pubblicità
        </Link>
      </li>
    </ul>
  </div>
</nav>


      <div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Button color="link" className="nav-link px-2" onClick={openSideNav}>
        <IconMenu/> Sezioni
        </Button>
      </li>
      <li>
        <Link href="/notizie" className="nav-link px-2 link-dark">
          Ultime notizie
        </Link>
      </li>
      <li>
        <Link href="/eventi" className="nav-link px-2 link-dark">
          Eventi
        </Link>
      </li>
      <li>
        <Link href="/comuni" className="nav-link px-2 link-dark">
          Comuni
        </Link>
      </li>
    </ul>
    <Link
      href="/"
      className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
      <img src="https://gardatoday.it/assets/images/logo.svg"/>
    </Link>
    <div className="col-md-3 text-end">
    <Link href="/login" className="px-2"><Button  color="primary" outline>
       <IconUserCircle/> Accedi
      </Button></Link>
      <Button variant="link">
        <IconSearch/>
      </Button>
    </div>
  </header>
</div>

    </div>
    </>
  
  );
};

export default Header;
