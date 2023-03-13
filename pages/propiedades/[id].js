import Head from "next/head";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "../../styles/Details.module.scss";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import mongoConnection from "../../lib/dbConnect";
import RealEstate from "../../models/RealEstate";
import {
  iconsFilter,
  iconsFilterSmall,
} from "../../utils/constants/iconstFilter";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Form from "../../components/Form";
import SlidePrevButton from "../../components/Swiper/SlidePrevButton";
import SlideNextButton from "../../components/Swiper/SlideNextButton";
import BoxLessInfo from "../../components/Boxes/BoxLessInfo";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import Room from "../../components/Icons/Room";
import Bath from "../../components/Icons/Bath";
import useSWR from "swr";
import BoxClouldInterest from "../../components/Boxes/BoxCouldInterest";
import Pin from "../../components/Icons/Pin";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const PropertiesDetails = ({ data }) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { data: couldInterest, error } = useSWR("/api/couldinterest", fetcher);
  return (
    <div>
      <Head>
        <title>
          Faggi Aispuro Propiedades - {data.title} - {data.location}
        </title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headerDetails}>
        <div>
          <h2>{data.title}</h2>
          <div className={styles.separator} />
          <p className={styles.location}>
            {" "}
            <Pin size={20} />
            <span style={{ paddingLeft: "5px" }}>{data.locationHeader}</span>
          </p>
        </div>
        <h2>{data.price}</h2>
      </div>
      <div className={styles.bigCarousel}>
        <Swiper spaceBetween={0} slidesPerView={1} modules={[Pagination]}>
          {data?.youtube && (
            <SwiperSlide>
              <iframe
                src={`https://www.youtube.com/embed/${data.youtube}?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${data.youtube}&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          )}
          <SwiperSlide style={{ cursor: "pointer" }}>
            <img src={data.imageFront[0]} alt={`slideFront`} />
          </SwiperSlide>
          {data?.images.length > 0 &&
            data.images.map((item, idx) => (
              <SwiperSlide key={idx} style={{ cursor: "pointer" }}>
                <img src={item} alt={`slide${idx}`} />
              </SwiperSlide>
            ))}
          <SlidePrevButton />
          <SlideNextButton />
        </Swiper>
      </div>
      <div className={styles.boxDataIcons}>
        <div>
          <Room size={width > 768 ? 30 : 20} />
          {data.bedrooms > 1 && <p>{data.bedrooms} Dormitorios</p>}
          {data.bedrooms === 1 && <p>{data.bedrooms} Dormitorio</p>}
          {data.bedrooms < 1 && <p>{data.bedrooms} Dormitorios</p>}
        </div>
        <div>
          <Bath size={width > 768 ? 30 : 20} />
          {data.bathrooms > 1 && <p>{data.bathrooms} Dormitorios</p>}
          {data.bathrooms === 1 && <p>{data.bathrooms} Dormitorio</p>}
          {data.bathrooms < 1 && <p>{data.bathrooms} Dormitorios</p>}
        </div>
        {width > 768 &&
          Object.keys(iconsFilter).map((item, idx) => {
            if (item in data && data[item])
              return (
                <div key={idx}>
                  {iconsFilter[item].icon}
                  <p>{iconsFilter[item].name}</p>
                </div>
              );
            return null;
          })}
        {width < 768 &&
          Object.keys(iconsFilterSmall).map((item, idx) => {
            if (item in data && data[item])
              return (
                <div key={idx}>
                  {iconsFilterSmall[item].icon}
                  <p>{iconsFilterSmall[item].name}</p>
                </div>
              );
            return null;
          })}
      </div>

      <div className={styles.realstateData}>
        <div className={styles.realstateDataDescription}>
          <h3 className={styles.realstateDataDescriptionTitle}>Descripción</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.sanitizedHtml,
            }}
          ></div>
          <Popup trigger={<button>Consultar vía mail</button>} modal nested>
            {(close) => (
              <div
                className={styles.modal}
                style={{
                  padding: "20px 0px",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <AiOutlineCloseCircle
                    size={30}
                    style={{ cursor: "pointer" }}
                    onClick={close}
                  />
                </div>
                <div>
                  <Form />
                </div>
              </div>
            )}
          </Popup>
          <a
            href="https://wa.me/5492915358320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ backgroundColor: "#25D366" }}>
              Consultar vía whatsapp
            </button>
          </a>
        </div>
        <div className={styles.realstateDataMap}>
          <iframe
            width="500"
            height="400"
            frameBorder="0"
            className={styles.map}
            referrerPolicy="no-referrer-when-downgrade"
            src={``}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.suggestions}>
        <h3 className={styles.title}>
          Otras propiedades que pueden interesarte
        </h3>
        <div className={styles.highlightedContainer}>
          {couldInterest?.data?.length > 0 &&
            couldInterest.data.map((item, idx) => {
              if (item.slug === data.slug) return null;
              return (
                <Card key={idx}>
                  <BoxClouldInterest item={item} />
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;

export async function getStaticPaths() {
  await mongoConnection();
  const posiblePaths = await RealEstate.find({});
  const paths = posiblePaths.map((doc) => {
    const propiedad = doc.toObject();
    propiedad.slug = `${propiedad.slug}`;
    return { params: { id: propiedad.slug } };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    await mongoConnection();
    const result = await RealEstate.findOne({ slug: params.id });
    let data = result.toObject();
    data._id = data._id.toString();

    return { props: { data }, notFound: !data };
  } catch (error) {
    return {
      props: { data: null },
      notFound: true,
    };
  }
}
// export async function getServerSideProps({ params }) {
//   try {
//     await mongoConnection();
//     const result = await RealEstate.findById(params.id);
//     let data = result.toObject();
//     data._id = data._id.toString();

//     const resultHighlighted = await RealEstate.find({ highlighted: true });
//     const dataHighlighted = resultHighlighted.map((doc) => {
//       const pub = doc.toObject();
//       pub._id = pub._id.toString();
//       return pub;
//     });

//     return { props: { data, dataHighlighted } };
//   } catch (error) {
//     console.log(error);
//   }
// }
