import React, { useState } from "react";
import Link from "next/link";
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

const Footer = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <footer className="site-footer">
  <div className="site-footer-main">
    <div className="container">
      <section>
        <div className="row clearfix">
          <div className="col-sm-12">
            <div className="site-brand-wrapper">
              <a href="/" className="site-logo" data-focus-mouse="false">
                <img
                  src="https://gardatoday.it/assets/images/logo-white-100.svg"
                  alt="Logo gardatoday"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Amministrazione">
                Link utili
              </a>
            </h4>
            <div className="list">
              <ul className="footer-list list-unstyled">
                <li>
                  <a className="list-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/notizie">
                    Ultime notizie
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/comuni">
                    Comuni
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/lavoro">
                    Offerte di lavoro
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/pubblicita">
                    Pubblicità
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/carica-contenuto">
                    Inviaci una segnalazione
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Servizi">
                Sezioni
              </a>
            </h4>
            <div className="link-list-wrapper">
              <ul className="footer-list list-unstyled">
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/ambiente"
                  >
                    Ambiente
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/animali"
                  >
                    Animali
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/arte-e-cultura"
                  >
                    Arte e Cultura
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/attualita"
                  >
                    Attualità
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/avvisi"
                  >
                    Avvisi
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/casa"
                  >
                    Casa
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/comuni"
                  >
                    Comuni
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/cronaca"
                  >
                    Cronaca
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/economia"
                  >
                    Economia
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/elezioni-2022"
                  >
                    Elezioni amministrative 2022
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/enogastronomia"
                  >
                    Enogastronomia
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/eventi"
                  >
                    Eventi
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/famiglia"
                  >
                    Famiglia
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/formazione"
                  >
                    Formazione
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/sezioni/giovani"
                  >
                    Giovani
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Novità">
                Eventi
              </a>
            </h4>
            <div className="link-list-wrapper">
              <ul className="footer-list list-unstyled">
                <li>
                  <a className="list-item" href="/eventi">
                    Arte e cultura
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Teatro
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Shopping
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Tempo libero
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Enogastronomia
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Famiglia
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Ambiente
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Natura
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Sport
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Storia
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Degustazione
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Traffico
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Territorio
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Tecnologia e Web
                  </a>
                </li>
                <li>
                  <a className="list-item" href="/eventi">
                    Salute
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <h4>
              <a href="#" title="Vai alla pagina: Documenti">
                Comuni
              </a>
            </h4>
            <div className="link-list-wrapper">
              <ul className="footer-list list-unstyled">
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/brescia"
                  >
                    Brescia
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/castiglione-delle-stiviere"
                  >
                    Castiglione delle Stiviere
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/desenzano-del-garda"
                  >
                    Desenzano del Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/garda"
                  >
                    Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/limone-sul-garda"
                  >
                    Limone sul Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/lonato-del-garda"
                  >
                    Lonato del Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/manerba-del-garda"
                  >
                    Manerba del Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/montichiari"
                  >
                    Montichiari
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/padenghe-sul-garda"
                  >
                    Padenghe sul Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/peschiera-del-garda"
                  >
                    Peschiera del Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/riva-del-garda"
                  >
                    Riva Del Garda
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/salo"
                  >
                    Salò
                  </a>
                </li>
                <li>
                  <a
                    className="list-item"
                    href="https://gardatoday.it/comuni/sirmione"
                  >
                    Sirmione
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-white border-top">
        <div className="row">
          <div className="col-lg-3 col-md-3 pb-2">
            <p>
              Allegato ad Area Blu Reg.Trib.Brescia n°32/2006 del 20/07/2006
            </p>
          </div>
          <div className="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Contatti">
                Direttore responsabile
              </a>
            </h4>
            <p>
              <strong>Francesco Salvetti</strong>
              <br />
              Via XX Settembre, 30 - 25122 Brescia Codice fiscale / P. IVA:
              03430470173
            </p>
          </div>
          <div className="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Newsletter">
                Newsletter
              </a>
            </h4>
            <div>
              <form
                className="js-cm-form form-newsletter"
                id="subForm"
                action="https://www.createsend.com/t/subscribeerror?description="
                method="post"
                data-id="2BE4EF332AA2E32596E38B640E9056197742D95075D3395E03CF9C67C3BDED1C2152C9B13A19FC4FE4BAD6A1E37F15D3350001FBF87DEF1E3CA6514D23039EA2"
              >
                <div>
                  <div>
                    <label>Indirizzo email </label>
                    <input
                      autoComplete="Email"
                      aria-label="Indirizzo email"
                      className="js-cm-email-input qa-input-email"
                      id="fieldEmail"
                      maxLength={200}
                      name="cm-jjdkjjk-jjdkjjk"
                      placeholder="Indirizzo email"
                      required=""
                      type="email"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            aria-required=""
                            id="cm-privacy-consent"
                            name="cm-privacy-consent"
                            required=""
                            type="checkbox"
                          />
                          <label
                            className="text-white"
                            style={{ fontSize: 12 }}
                            htmlFor="cm-privacy-consent"
                          >
                            Accetto i termini e le condizioni*
                          </label>
                        </div>
                        <input
                          className="form-control"
                          id="cm-privacy-consent-hidden"
                          name="cm-privacy-consent-hidden"
                          type="hidden"
                          defaultValue="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-icon" type="submit">
                  <span>Iscriviti</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Seguici su">
                Social
              </a>
            </h4>
              <Link href="#"><IconBrandInstagram/></Link>
              <Link href="#"><IconBrandFacebook/></Link>
              <Link href="#"><IconBrandLinkedin/></Link>
              <Link href="#"><IconBrandTwitter/></Link>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div className="site-footer-small-prints clearfix">
    <div className="container">
      <h3 className="sr-only">Sezione Link Utili</h3>
      <ul className="site-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li className="list-inline-item">
          <a href="https://gardatoday.it/legal/cookies" title="Cookies">
            Cookies
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://gardatoday.it/legal/privacy-policy"
            title="Privacy policy"
          >
            Privacy policy
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/sitemap">Mappa del sito</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};
export default Footer;
