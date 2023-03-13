import { useRouter } from "next/router";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Pin from "../../Icons/Pin";
import styles from "./BoxLessInfo.module.scss";
const BoxLessInfo = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className={styles.boxContainer}
      onClick={() => router.push(`/propiedades/${item.slug}`)}
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
    </div>
  );
};

export default BoxLessInfo;
