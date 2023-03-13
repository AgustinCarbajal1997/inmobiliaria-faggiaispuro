import React from "react";
import styles from "./Contact.module.scss";
import {
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import Wpp from "../Icons/Wpp";
import Mail from "../Icons/Mail";
import Fb from "../Icons/Fb";
import Ig from "../Icons/Ig";
const Contact = () => {
  return (
    <div className={styles.aboutContainer} id="contacto">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.aboutContactContainer}>
          <div>
            <h6>Ventas</h6>
            <div>
              <p>
                <Wpp link="https://wa.me/5492915358320" />
                <span style={{ paddingLeft: "10px" }}>
                  Olivia:{" "}
                  <span style={{ fontWeight: "600" }}>
                    <a
                      href="https://wa.me/5492915358320"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2915358320
                    </a>
                  </span>
                </span>
              </p>
              <p>
                <Wpp link="https://wa.me/5492914747789" />
                <span style={{ paddingLeft: "10px" }}>
                  Ezequiel:{" "}
                  <span style={{ fontWeight: "600" }}>
                    <a
                      href="https://wa.me/5492914747789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2914747789
                    </a>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div>
            <h6>Alquileres</h6>
            <div>
              <p>
                <Wpp link="https://wa.me/5492914747789" />
                <span style={{ paddingLeft: "10px" }}>
                  Ezequiel:{" "}
                  <span style={{ fontWeight: "600" }}>
                    <a
                      href="https://wa.me/5492914747789"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2914747789
                    </a>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div>
            <h6>Correo electrónico</h6>
            <div>
              <p>
                <Mail />
                <span style={{ paddingLeft: "10px", fontWeight: "600" }}>
                  faggiaispuropropiedades@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div>
            <h6>Redes sociales</h6>
            <div>
              <p>
                <Ig link="https://www.instagram.com/faggiaispuropropiedades/" />
                <Fb link="https://www.facebook.com/faggiaispuropropiedades/" />

                <span style={{ paddingLeft: "10px", fontWeight: "600" }}>
                  faggiaispuropropiedades
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.aboutMapContainer}>
          <fieldset>
            <legend>Visitá nuestras oficinas</legend>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4725299939514!2d-62.258345000000006!3d-38.7069589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda35595ab043d%3A0x1f594728f0a9b06e!2s19%20de%20Mayo%20925%2C%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1653840100494!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
