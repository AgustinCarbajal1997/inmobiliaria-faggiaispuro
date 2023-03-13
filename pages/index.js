import Head from "next/head";
import About from "../components/About";
import AboutServices from "../components/AboutServices";
import Contact from "../components/Contact";
import Form from "../components/Form";
import Header from "../components/Header";
import Highlighted from "../components/Highlighted";
import mongoConnection from "../lib/dbConnect";
import RealEstate from "../models/RealEstate";
import styles from "../styles/Home.module.scss";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {data?.length > 0 && <Highlighted data={data} />}
      <About />
      <AboutServices />
      <Contact />
      <Form />
    </div>
  );
}

export async function getStaticProps() {
  try {
    await mongoConnection();
    const result = await RealEstate.find({ highlighted: true });
    const data = result.map((doc) => {
      const pub = doc.toObject();
      pub._id = pub._id.toString();
      return pub;
    });
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
