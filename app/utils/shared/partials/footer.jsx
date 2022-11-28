import React, { useState } from "react";
import Link from "next/link";


const Footer = () => {
  const [expanded, setExpanded] = useState(true);
  return(
    <footer>
    <section className="uk-section uk-section-secondary uk-section-small uk-light">
      <div className="uk-container">
        <div
          className="uk-grid-medium uk-child-width-1-1 uk-child-width-1-4@m uk-grid"
          uk-grid=""
        >
          <div className="uk-first-column">
            <a className="uk-logo" href="/">
              <img
                src="https://beta.resthotels.it/web/static/logo-white.svg"
                alt="Logo"
              />
            </a>
            <p className="uk-text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              mauris eros. Nulla quis ante sed tortor efficitur facilisis.
            </p>
            <ul className="uk-iconnav">
              <li>
                <a
                  href="#"
                  title="Facebook"
                  uk-icon="facebook"
                  className="uk-icon"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  title="Twitter"
                  uk-icon="twitter"
                  className="uk-icon"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  title="YouTube"
                  uk-icon="youtube"
                  className="uk-icon"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  uk-icon="instagram"
                  className="uk-icon"
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <nav className="uk-grid-small uk-child-width-1-2 uk-grid" uk-grid="">
              <div className="uk-first-column">
                <ul className="uk-nav uk-nav-default">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/login">Accedi</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQ</a>
                  </li>
                  <li>
                    <a href="/contacts">Contatti</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-nav uk-nav-default">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div>
            <ul className="uk-nav uk-nav-default">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <form className="uk-form-stacked">
              <label>
                <div className="uk-form-label uk-text-muted">
                  Subscribe for updates
                </div>
                <div className="uk-inline uk-width-1-1">
                  <a
                    className="uk-form-icon uk-form-icon-flip uk-icon"
                    href="#"
                    uk-icon="mail"
                  ></a>
                  <input
                    className="uk-input"
                    type="email"
                    placeholder="Your email"
                    required=""
                  />
                </div>
              </label>
            </form>
            <div className="uk-margin uk-text-small uk-text-muted">
              Shopping Categories icons by Jaro Sigrist from Noun Project
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
  
);
  }
export default Footer;
