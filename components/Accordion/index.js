import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineDelete } from "react-icons/md";
import styles from "./Accordion.module.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Loader from "../Loader";
const EliminarLocalidad = ({ id, onDeleteLocality }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Popup
        trigger={
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <MdOutlineDelete
              color="#c2002d"
              size={28}
              style={{ cursor: "pointer" }}
            />
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>
              &times;
            </button>
            <div className={styles.headerModal}>
              {" "}
              ¿Está seguro que desea eliminar esta localidad?{" "}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.buttonCancel}
                onClick={() => {
                  close();
                }}
              >
                Cancelar
              </button>
              <button
                className={styles.buttonConfirm}
                onClick={() => {
                  onDeleteLocality(id);
                  close();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </Popup>
      {loading && <Loader />}
    </>
  );
};

const EliminarZona = ({ zone, id, onDeleteZone }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Popup
        trigger={
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <MdOutlineDelete
              color="#c2002d"
              size={28}
              style={{ cursor: "pointer" }}
            />
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>
              &times;
            </button>
            <div className={styles.headerModal}>
              {" "}
              ¿Está seguro que desea eliminar esta zona?{" "}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.buttonCancel}
                onClick={() => {
                  close();
                }}
              >
                Cancelar
              </button>
              <button
                className={styles.buttonConfirm}
                onClick={() => {
                  onDeleteZone(zone, id);
                  close();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </Popup>
      {loading && <Loader />}
    </>
  );
};

const Accordion = ({ item, onDeleteLocality, onDeleteZone, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionHeader}>
        <h3>{item.locality}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <MdOutlineDelete
            size={25}
            color="darkred"
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={() => onDeleteLocality(item.id)}
          /> */}
          <EliminarLocalidad id={item.id} onDeleteLocality={onDeleteLocality} />
          <MdOutlineKeyboardArrowDown
            size={30}
            color="#3d3d3c"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles.accordionZones}>
          {children}
          {item &&
            item.zones.map((zone, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>{zone}</p>
                <EliminarZona
                  zone={zone}
                  id={item.id}
                  onDeleteZone={onDeleteZone}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
