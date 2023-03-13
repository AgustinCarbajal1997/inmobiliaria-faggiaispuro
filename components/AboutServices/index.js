import React from "react";
import styles from "./AboutServices.module.scss";

const AboutServices = () => {
  return (
    <div className={styles.aboutServicesContainer} id="servicios">
      <div className={styles.aboutServicesTitleContainer}>
        <h5>Nuestros servicios</h5>
      </div>
      <div className={styles.aboutServicesItemsContainer}>
        <div>
          <img src="/compraventa.png" />
          <p className={styles.highlightedText}>Asesoramiento</p>
          <p>en la compra/venta</p>
          <p>de propiedades.</p>
        </div>
        <div>
          <img src="/alquileres.png" />
          <p className={styles.highlightedText}>Administración </p>
          <p>de alquileres.</p>
        </div>
        <div>
          <img src="/tasaciones.png" />
          <p
            className={styles.highlightedText}
            style={{ textAlign: "center", paddingLeft: "0px" }}
          >
            Tasaciones.
          </p>
        </div>
      </div>
      <div style={{ alignSelf: "flex-end" }} className={styles.matriculas}>
        <p className={styles.matriculasTitle}>¡Estamos para ayudarte!</p>
        <div>
          <p>Olivia Faggi - Matrícula 2074</p>
          <p>Ezequiel Aispuro - Matrícula 2012</p>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
