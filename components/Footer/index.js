import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Footer.module.scss";
import Mail from "../Icons/Mail";
import Pin from "../Icons/Pin";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>
        <a
          href="https://www.google.com/maps/place/19+de+Mayo+925,+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7069589,-62.258345,17z/data=!3m1!4b1!4m5!3m4!1s0x95eda35595ab043d:0x1f594728f0a9b06e!8m2!3d-38.7069589!4d-62.258345"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Pin />
          <span style={{ paddingLeft: "10px" }}>Oficina: 19 de mayo 925</span>
        </a>
      </p>
      <p style={{ display: "flex", alignItems: "center" }}>
        <Mail />
        <span style={{ paddingLeft: "10px" }}>
          faggiaispuropropiedades@gmail.com
        </span>
      </p>
    </div>
  );
};

export default Footer;
