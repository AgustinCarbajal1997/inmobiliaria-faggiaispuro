import Head from "next/head";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR, { mutate } from "swr";
import Checkbox from "../../../components/Checkbox";
import { setReviewed } from "../../../services";
import styles from "../../../styles/Messages.module.scss";

const ReviewedMessage = ({ reviewed, id }) => {
  const [checked, setChecked] = useState(reviewed);
  const onChange = async (state) => {
    try {
      await setReviewed(id);
      setChecked(state);
      toast.success("Modificado correctamente");
      mutate("/api/message");
    } catch (error) {
      toast.error("Ocurrio un error, intente nuevamente mas tarde.");
    }
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const Mensajes = () => {
  const { data, error } = useSWR("/api/message", fetcher);
  return (
    <div className={styles.messagePage}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Mensajes recibidos {data?.reviewed && <span>{data.reviewed}</span>}
      </h1>
      <div className={styles.messagesContainer}>
        {data?.messages?.length &&
          data.messages.map((item, idx) => (
            <div key={idx} className={styles.messageContainer}>
              <div>
                <h3>Nombre</h3>
                <p>{item.name}</p>
              </div>
              <div>
                <h3>Asunto</h3>
                <p>{item.reason}</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>{item.email}</p>
              </div>
              <div>
                <h3>Número de teléfono</h3>
                <p>{item.phone}</p>
              </div>
              <div>
                <h3>Mensaje</h3>
                <p>{item.message}</p>
              </div>
              <div className={styles.response}>
                <div>
                  <p>Marcar como leído</p>
                  <ReviewedMessage reviewed={item.reviewed} id={item.id} />
                </div>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${item.email}&su=${item.reason}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contestar
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mensajes;
