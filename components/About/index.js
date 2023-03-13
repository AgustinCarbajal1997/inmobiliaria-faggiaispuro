import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="nosotros">
      <div
        style={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.aboutImgContainer}>
          <img src="/about11.jpeg" />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.aboutDataContainer}>
          <div>
            <h5>Quiénes somos</h5>
            <div>
              <p>
                Somos Olivia Faggi y Ezequiel Aispuro, una sociedad de jóvenes
                martilleros. Nos unimos con el propósito de brindar atención
                profesional y personalizada en el ámbito inmobiliario. Otorgamos
                un servicio responsable a la hora de la búsqueda, acompañandote
                durante todo el proceso. Nuestro trabajo se basa en la ética,
                confianza y comunicación proactiva.{" "}
                <span>
                  ¡De este modo procuraremos obtener los mejores resultados!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
