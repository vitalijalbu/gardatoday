import React from 'react';
import Link from 'next/link';
import SideNav from '@/shared/account/side-nav';
import { Container, Ro, Col } from 'reactstrap';

  const Preferiti = () => {
 
    return (
   
      <Container>
<div className="row g-5">
<div className="col-md-4">
    <div className="position-sticky" style={{ top: "2rem" }}>

      <div className="p-4">
      <SideNav/>
      </div>
    </div>
  </div>
  <div className="col-md-8">
    <h3 className="pb-4 mb-4  border-bottom">I miei preferiti</h3>
    <article className="blog-post">
      <h2 className="blog-post-title mb-1"> I tuoi interessi</h2>
      <p>
Da oggi puoi seguire i tuoi interessi direttamente da qui.

Scegli un autore, un argomento o una sezione su ilGiornale.it, clicca sul tasto 
Segui e troverai qui gli aggiornamenti per te.
      </p>
      <ul>
        <li>First list item</li>
        <li>Second list item with a longer description</li>
        <li>Third list item to close it out</li>
      </ul>
      <p>
        This is some additional paragraph placeholder content. It's a slightly
        shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
    <nav className="blog-pagination" aria-label="Pagination">
      <a className="btn btn-outline-primary rounded-pill" href="#">
        Older
      </a>
      <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
    </nav>
  </div>

</div>
<div className="container px-4 py-5" id="featured-3">
  <h2 className="pb-2 border-bottom">Altro da GardaToday</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#collection" />
        </svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#people-circle" />
        </svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#toggles2" />
        </svg>
      </div>
      <h3 className="fs-2">Featured title</h3>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="icon-link d-inline-flex align-items-center">
        Call to action
        <svg className="bi" width="1em" height="1em">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
  </div>
</div>

      </Container>

    );
};

export default Preferiti;
