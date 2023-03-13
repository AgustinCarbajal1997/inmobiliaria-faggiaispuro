import React from "react";
import InputSearch from "../Search/InputSearch";
import styles from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.appHeaderContainer} id="inicio">
      {width < 768 ? (
        <video
          src="/INMOB_2_comp2.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
          }}
        />
      ) : (
        <video
          src="/INMOB_2.mp4"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#3d3d3c",
            objectFit: "fill",
          }}
        />
      )}
      <div className={styles.searcher}>
        <h3>¿Qué estás buscando?</h3>
        <div>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
