import { useRouter } from "next/router";
import React from "react";
import Pin from "../../Icons/Pin";
import styles from "./BoxClouldInterest.module.scss";
const BoxClouldInterest = ({ item }) => {
  const router = useRouter();
  return (
    <a
      href={`/propiedades/${item.slug}`}
      className={styles.boxContainer}
      rel="noopener noreferrer"
    >
      <div className={styles.boxData}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.location}>
          {" "}
          <Pin />
          <span style={{ paddingLeft: "5px" }}>{item.locationHeader}</span>
        </p>
      </div>
      <img src={item.imageFront[0]} alt="image-card" className={styles.image} />
    </a>
  );
};

export default BoxClouldInterest;
