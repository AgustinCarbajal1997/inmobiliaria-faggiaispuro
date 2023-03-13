import Head from "next/head";
import React from "react";
import Properties from "../../components/Properties";

const Propiedades = () => {
  return (
    <div>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Properties />
    </div>
  );
};

export default Propiedades;
