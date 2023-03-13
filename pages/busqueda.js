import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import BoxMoreInfo from "../components/Boxes/BoxMoreInfo";
import Card from "../components/Card";
import createQuery from "../utils/functions/createQuery";
import styles from "../styles/Buqueda.module.scss";
import Head from "next/head";
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data?.data);

const Busqueda = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data, error } = useSWR(
    q ? `/api/generalSearch${createQuery(q)}` : null,
    fetcher
  );

  return (
    <div className={styles.searchPageContainer}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data?.length > 0 && <h2>Estos son los resultados de su búsqueda...</h2>}
      {data?.length === 0 && (
        <h2>No se han encontrado resultados para su búsqueda...</h2>
      )}
      {data?.length === 0 && (
        <div className={styles.buttonContainer}>
          <button onClick={() => router.push("/")}>Volver a inicio</button>
        </div>
      )}
      <div className={styles.highlightedContainer}>
        {data?.length > 0 &&
          data.map((item, idx) => (
            <Card key={idx}>
              <BoxMoreInfo item={item} />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Busqueda;
