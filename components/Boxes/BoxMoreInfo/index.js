import React from "react";
import styles from "./BoxMoreInfo.module.scss";
import { useRouter } from "next/router";
import iconsBoxMoreInfo from "../../../utils/constants/iconsBoxMoreInfo";
import Room from "../../Icons/Room";
import Bath from "../../Icons/Bath";
import Pin from "../../Icons/Pin";

const BoxMoreInfo = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className={styles.boxContainer}
      onClick={() => router.push(`/propiedades/${item.slug}`)}
    >
      <img
        src={item?.imageFront[0]}
        alt="image-card"
        className={styles.image}
      />
      <div className={styles.boxData}>
        <div className={styles.boxDataIcons}>
          <div>
            <Room size={20} />
            {item.bedrooms > 1 && <p>{item.bedrooms} Dormitorios</p>}
            {item.bedrooms === 1 && <p>{item.bedrooms} Dormitorio</p>}
            {item.bedrooms < 1 && <p>{item.bedrooms} Dormitorios</p>}
          </div>
          <div>
            <Bath size={20} />
            {item.bathrooms > 1 && <p>{item.bathrooms} Baños</p>}
            {item.bathrooms === 1 && <p>{item.bathrooms} Baño</p>}
            {item.bathrooms < 1 && <p>{item.bathrooms} Baños</p>}
          </div>
          {Object.keys(iconsBoxMoreInfo).map((icon, idx) => {
            if (icon in item && item[icon] && idx < 6)
              return (
                <div key={idx}>
                  {iconsBoxMoreInfo[icon].icon}
                  <p>{iconsBoxMoreInfo[icon].name}</p>
                </div>
              );
            return null;
          })}
        </div>
        <div className={styles.separator} />
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.location}>
          {" "}
          <Pin />
          <span style={{ paddingLeft: "5px" }}>{item.locationHeader}</span>
        </p>
        <h5 className={styles.value}>{item.price}</h5>
      </div>
    </div>
  );
};

export default BoxMoreInfo;
