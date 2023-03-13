import Head from "next/head";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import useAppContext from "../../context/useAppContext";
import { signInWithEmailAndPass } from "../../firebase/client";
import styles from "../../styles/Login.module.scss";
export default function Login() {
  const { login } = useAppContext();
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPass(username, password);
      setLoading(false);
    } catch (error) {
      toast.error("Usuario o contraseña incorrecto");
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.imageContainer}>
        <img src="/loader.jpeg" alt="logo" />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Usuario
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Iniciar sesión" className={styles.submit} />
      </form>
      {loading && <Loader />}
    </div>
  );
}
