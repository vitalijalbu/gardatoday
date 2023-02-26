import React, { useState } from "react";
import Link from "next/link";
import { getSession, removeSession } from "@/lib/graphql/client";
import confirm from '@/shared/components/confirm/';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button,
} from "reactstrap";
import SideMenu from "./side-menu";
import SearchOverlay from "./search-overlay";
import {
  IconHaze,
  IconMenu,
  IconMessageCircle,
  IconBookmark,
  IconSettings,
  IconUserCircle,
  IconSearch,
  IconSunHigh,
  IconMoonStars,
  IconBrandFacebook,
  IconBrandYoutube
} from "@tabler/icons-react";

const Header = () => {
  const session = getSession();
  const user = session.user;
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);
  /* actions */
  const openSideNav = () => setNavOpen(!navOpen);
  const openSearch = () => setsearchOpen(!searchOpen);
    /* Confirm */
    const handleLogout = () => {
      confirm({
        title: 'Sei sicuro di voler uscire?',
        message: 'Potrai sempre accedere di nuovo in qualsiasi istante.',
        cancelText: 'Annulla',
        confirmText: 'Esci',
        confirmColor: 'danger',
      }).then((confirmed) => {
        if (confirmed) {
          removeSession();
          window.location.href="/";
        }
      });
    };
  

  return (
    <>
      {navOpen && <SideMenu opened={navOpen} toggle={openSideNav} />}
      {searchOpen && <SearchOverlay opened={searchOpen} toggle={openSearch} />}
      <div className="navbar-container">
  <div className="container">
    {/* ====== start top navbar ====== */}
    <div className="top-navbar style-1">
      <div className="container p-0">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="date-weather mb-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="item">
                    <div className="icon me-3 pt-1">
                      <i className="la la-calendar" />
                    </div>
                    <div className="inf">
                      <strong>Monday</strong>
                      <p>Nov 25, 2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item">
                    <div className="icon me-3 pt-1">
                      <IconSunHigh />
                    </div>
                    <div className="inf">
                      <strong>32° deg, Cloudy</strong>
                      <p>New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Link href="#" className="logo-brand d-none d-lg-block">
              <img
                src="/images/logo.svg"
                alt=""
                className="dark-none"
              />
              <img
                src="/images/logo.svg"
                alt=""
                className="light-none"
              />
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="sub-darkLight">
              <div className="row text-end align-items-center">
                <div className="col-6">
                  <Link
                    href="#0"
                    className="text-uppercase fs-6 border-bottom border-1 border-dark subs"
                  >
                    <i className="la la-envelope fs-5 me-1" />
                    Subscribe
                  </Link>
                </div>
                <div className="col-6">
                  <div className="darkLight-btn">
                    <span className="icon" id="light-icon">
                    <IconSunHigh/>
                    </span>
                    <span className="icon" id="dark-icon">
                      <IconMoonStars />
                    </span>
                  </div>
                </div>
              </div>
              <div className="nav-subs-card">
                <p className="fsz-16px text-uppercase mb-20"> Newsletter </p>
                <div className="sub-form">
                  <div className="form-group">
                    <span className="icon">
                      <i className="la la-envelope" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your email"
                    />
                    <button>subscribe</button>
                  </div>
                  <p className="mt-3 color-666 fsz-12px fst-italic">
                    By subscribing, you accepted the our{" "}
                    <Link
                      href="#0"
                      className="color-777 text-decoration-underline fst-normal"
                    >
                      Policy
                    </Link>
                  </p>
                </div>
                <span className="cls">
                  {" "}
                  <i className="la la-times" />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ====== end top navbar ====== */}
    {/* ====== start navbar ====== */}
    <nav className="navbar navbar-expand-lg navbar-light style-1">
      <div className="container p-0">
        <div className="mob-nav-toggles d-flex align-items-center justify-content-between">
          <button
            className="navbarList-icon me-lg-5"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span />
            <span />
          </button>
          <Link href="#" className="logo-brand d-block d-lg-none w-50 my-4">
            <img
              src="/images/logo.svg"
              alt=""
              className="dark-none"
            />
            <img
              src="/images/logo.svg"
              alt=""
              className="light-none"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
              href="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>            
            <li className="nav-item">
              <Link
              href="/notizie"
                className="nav-link"
              >
                Ultime notizie
              </Link>
            </li>
            <li className="nav-item">
              <Link
              href="/notizie"
                className="nav-link"
              >
                Eventi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/zone">
                Zone
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <Link href="#" className="icon-link">
            <IconSearch/>
            </Link>
            <Link href="/login" className="icon-link noti-dot">
               <IconUserCircle/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    {/* ====== end navbar ====== */}
    {/* ====== start nav-search ====== */}
    <div className="nav-search-style1">
      <div className="row justify-content-center align-items-center gx-lg-5">
        <div className="col-lg-4">
          <div className="info">
            <h5>
              {" "}
              you can search by category <br /> or news title{" "}
            </h5>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="form">
            <span className="color-777 fst-italic text-capitalize mb-2 fsz-13px">
              Enter Keyword
            </span>
            <div className="form-group">
              <span className="icon">
                <IconSearch/>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Elon Musk ... "
              />
              <button type="submit">search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* ====== end nav-search ====== */}
  </div>
</div>

    </>
  );
};

export default Header;
