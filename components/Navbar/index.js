import React, { useState, Fragment } from "react";
import styles from "./Navbar.module.scss";
import NavbarList from "./NavbarList";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import WppLight from "../Icons/WppLight";
import IgLight from "../Icons/IgLight";
import FbLight from "../Icons/FbLight";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  return (
    <nav className={`${styles.appNavbar}`}>
      <div className={styles.appNavbarLogo}>
        <Link href={`/#inicio`}>
          <a>
            <img src="/logo.png" alt="logo" className={styles.imageLogo} />
          </a>
        </Link>
      </div>
      <div>
        <div className={styles.socialMediaHeader}>
          <p>
            <WppLight link="https://wa.me/5492915358320" />
            <span style={{ paddingLeft: "10px" }}>
              <a
                href="https://wa.me/5492915358320"
                target="_blank"
                rel="noopener noreferrer"
              >
                2915358320
              </a>
            </span>
          </p>
          <p>
            <WppLight link="https://wa.me/5492914747789" />
            <span style={{ paddingLeft: "10px" }}>
              <a
                href="https://wa.me/5492914747789"
                target="_blank"
                rel="noopener noreferrer"
              >
                2914747789
              </a>
            </span>
          </p>
          <div>
            <IgLight link="https://www.instagram.com/faggiaispuropropiedades/" />

            <FbLight link="https://www.facebook.com/faggiaispuropropiedades/" />
          </div>
        </div>
        <ul className={styles.appNavbarLinks}>
          <Fragment>
            <li className={styles.li}>
              <Link href={`/#inicio`}>
                <a>inicio</a>
              </Link>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li className={styles.li}>
              <Link href={`/propiedades`}>
                <a>propiedades</a>
              </Link>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li
              className={styles.li}
              onMouseEnter={() => setIsOpenAbout(true)}
              onMouseLeave={() => setIsOpenAbout(false)}
            >
              <Link href={`/#nosotros`}>
                <a>nosotros</a>
              </Link>
              <div
                className={styles.dropdownContainer}
                style={{ display: isOpenAbout ? "block" : "none" }}
              >
                <Link href={`/#nosotros`}>
                  <p>Quiénes somos</p>
                </Link>
                <Link href={`/#servicios`}>
                  <p>Nuestros servicios</p>
                </Link>
              </div>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li className={styles.li}>
              <Link href={`/#contacto`}>
                <a>contacto</a>
              </Link>
            </li>
          </Fragment>
        </ul>
      </div>
      <div className={styles.appNavbarHamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          color={isOpen ? "#ffffff" : "#ffffff"}
        />
      </div>
      <div
        className={styles.appNavbarMenu}
        style={{ right: `${isOpen ? "0" : "-100%"}` }}
      >
        <ul>
          <Fragment>
            <li
              className="app__flex p-text app__li-nav"
              onClick={() => setOpen(false)}
            >
              <Link href={`/#inicio`}>
                <a>inicio</a>
              </Link>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li
              className="app__flex p-text app__li-nav"
              onClick={() => setOpen(false)}
            >
              <Link href={`/propiedades`}>
                <a>propiedades</a>
              </Link>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li
              className="app__flex p-text app__li-nav"
              onClick={() => setOpen(false)}
            >
              <Link href={`/#nosotros`}>
                <a>nosotros</a>
              </Link>
            </li>
            <div />
          </Fragment>
          <Fragment>
            <li
              className="app__flex p-text app__li-nav"
              onClick={() => setOpen(false)}
            >
              <Link href={`/#contacto`}>
                <a>contacto</a>
              </Link>
            </li>
          </Fragment>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
