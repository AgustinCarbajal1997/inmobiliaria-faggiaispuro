import React from "react";
import BoxLessInfo from "../Boxes/BoxLessInfo";
import Card from "../Card";
import styles from "./Highlighted.module.scss";
const Highlighted = ({ data }) => {
  return (
    <div className={styles.highlightedSection}>
      <h2 className={styles.title}>Propiedades destacadas</h2>
      <div className={styles.highlightedContainer}>
        {data.map((item, idx) => (
          <Card key={idx}>
            <BoxLessInfo item={item}/>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlighted;
