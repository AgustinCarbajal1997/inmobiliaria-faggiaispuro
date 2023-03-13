import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import CheckBox from "../../../components/Checkbox";
import { postNewPublication } from "../../../services";
import styles from "../../../styles/PropiedadesCreate.module.scss";
import ImageUploading from "react-images-uploading";
import useSWR from "swr";
import Autocomplete from "react-google-autocomplete";
import Loader from "../../../components/Loader";
import Head from "next/head";
import { storage } from "../../../firebase/client";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MdCloudUpload } from "react-icons/md";
import LoaderImage from "../../../components/LoaderImage";
import checks from "../../../utils/constants/checks";
import Bath from "../../../components/Icons/Bath";
import Room from "../../../components/Icons/Room";
import Price from "../../../components/Icons/Price";
import M2 from "../../../components/Icons/M2";
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dataModification = data.localities.map((item) => ({
        ...item,
      }));
      return dataModification;
    });
const Crear = () => {
  const { data: dataLocality, error } = useSWR("/api/locality", fetcher);
  const [markerMap, setMarkerMap] = useState(
    "Bahia Blanca Provincia de Buenos Aires"
  );
  const [locationHeader, setLocationHeader] = useState("");
  const [imageFront, setImageFront] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [zones, setZones] = useState(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bedrooms: "0",
      bathrooms: "0",
      measures: "0",
      garage: false,
      balcony: false,
      pool: false,
      barbecue: false,
      privateNeighborhood: false,
      backyard: false,
      grill: false,
      barter: false,
      alarm: false,
      sum: false,
      elevator: false,
      laundry: false,
      credit: false,
      services: false,
      highlighted: false,
    },
  });
  const onSubmit = async (data) => {
    try {
      if (!imageFront) {
        toast.error("Introduzca una imagen de portada");
        return;
      }
      if (!images?.length) {
        toast.error("Introduzca al menos una imagen para el slider");
        return;
      }

      setLoading(true);

      await postNewPublication(
        data,
        imageFront,
        images,
        markerMap,
        locationHeader
      );
      toast.success("¡Publicado correctamente!");
      router.push("/dashboard/propiedades");
    } catch (error) {
      toast.error("Ocurrió un error, vuelva a intentar");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const onChangeImageFront = (e) => {
    uploadImage(e.target.files[0], "front");
  };

  const uploadImage = (file, type) => {
    const storageRef = ref(storage, `/files/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoadingImage(true);
        setProgress(prog);
      },
      (err) => {
        toast.error("Ocurrió un error al cargar imagen");
        setLoadingImage(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setLoadingImage(false);
          if (type === "front") {
            setImageFront(url);
            return;
          }
          if (type === "list") {
            setImages([...images, url]);
            return;
          }
        });
      }
    );
  };

  const onChangeImageList = (e) => {
    uploadImage(e.target.files[0], "list");
  };

  const onChangeLocality = (e) => {
    if (!dataLocality) return;
    const findLocality = dataLocality.find(
      (item) => e.target.value === item.locality
    );
    setZones(findLocality.zones);
  };

  useEffect(() => {
    if (!dataLocality) return;
    setZones(dataLocality[0]?.zones);
    reset();
  }, [dataLocality]);
  return (
    <div className={styles.propiedadesCreate}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Crear publicación</h1>
      <form>
        <div>
          <h3 className={styles.subtitle}>Detalles de la publicación</h3>
        </div>
        <div className={styles.formRow}>
          <label>
            Título
            <input
              type="text"
              {...register("title", { required: true })}
              style={{ border: errors.title && "1px solid red" }}
            />
          </label>
          <label>
            Categoría
            <select {...register("category")}>
              <option value="departamento">Departamento</option>
              <option value="casaquinta">Casaquinta</option>
              <option value="casa">Casa</option>
              <option value="garage">Garage</option>
              <option value="deposito">Deposito</option>
              <option value="terreno">Terreno</option>
              <option value="terreno">Fideicomiso</option>
            </select>
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Localidad
            <select {...register("locality")} onChange={onChangeLocality}>
              {dataLocality &&
                dataLocality.map((item, idx) => (
                  <option key={idx} value={item.locality}>
                    {item.locality}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Zona/Barrio
            <select {...register("neighborhood")}>
              {zones &&
                zones.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Room size={30} /> Habitaciones
            </div>
            <input type="number" {...register("bedrooms")} />
          </label>
          <label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Bath size={30} /> Baños
            </div>
            <input type="number" {...register("bathrooms")} />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Price size={30} />
              Precio
            </div>
            <input
              type="text"
              {...register("price", { required: true })}
              style={{ border: errors.price && "1px solid red" }}
              placeholder="Puede insertar precio o el texto que desee"
            />
          </label>
          <label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <M2 size={30} /> m²
            </div>
            <input type="number" {...register("measures")} />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Condición
            <select {...register("condition")}>
              <option value="venta">Venta</option>
              <option value="alquiler">Alquiler</option>
            </select>
          </label>
          <label>
            Video de Youtube
            <input
              type="text"
              {...register("youtube")}
              placeholder="Inserte código de video"
            />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Identificador
            <input
              type="text"
              {...register("identifier", { required: true })}
              style={{ border: errors.identifier && "1px solid red" }}
              placeholder="Solo letras y números"
            />
          </label>
        </div>
        <div className={styles.formRowCheck}>
          {checks.map((item, idx) => (
            <label key={idx}>
              <div>
                <Controller
                  name={item.field}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <CheckBox checked={value} onChange={onChange} />
                  )}
                />
              </div>
              {item.icon}
              {item.name}
            </label>
          ))}
        </div>
        <div className={styles.formRowMessage}>
          <label>Descripción</label>
          <textarea
            {...register("description", { required: true })}
            style={{ border: errors.description && "1px solid red" }}
            placeholder="Descripción del inmueble (puede utilizar lenguaje markdown para destacar o armar listas)"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        {/* ------------------images---------------- */}
        <div>
          <h3 className={styles.subtitle}>Portada</h3>
          <div className={styles.imagesContainer}>
            <div className={styles.imagesContainerLabel}>
              <label className={styles.labelUpload}>
                <MdCloudUpload size={28} color={"#607d8b"} />
                SELECCIONAR
                <input
                  type="file"
                  onChange={onChangeImageFront}
                  style={{ display: "none" }}
                />
              </label>
              <input value="Eliminar portada" type="button" />
            </div>
            {imageFront && (
              <div className={styles.carouselImagesContainer}>
                <div className={styles.carouselImageItemContainerFront}>
                  <img src={imageFront} alt="" width="100" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>Imágenes del slider</h3>
          <div className={styles.imagesContainer}>
            <div className={styles.imagesContainerLabel}>
              <label className={styles.labelUpload}>
                <MdCloudUpload size={28} color={"#607d8b"} />
                SELECCIONAR
                <input
                  type="file"
                  onChange={onChangeImageList}
                  style={{ display: "none" }}
                />
              </label>
              <input value="Eliminar todas" type="button" />
            </div>
            <div className={styles.carouselImagesContainer}>
              {images?.length > 0 &&
                images.map((image, index) => (
                  <div
                    key={index}
                    className={styles.carouselImageItemContainer}
                  >
                    <img src={image} alt="" width="100" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </form>

      {loadingImage && <LoaderImage progress={progress} />}

      <div className={styles.locationContainer}>
        <h3 className={styles.subtitle}>Localización</h3>
        <input
          type="text"
          placeholder="Ingrese ubicación (se mostrará en encabezado de publicación)"
          className={styles.inputAutocomplete}
          onChange={(e) => setLocationHeader(e.target.value)}
          value={locationHeader}
        />
        <Autocomplete
          apiKey=""
          onPlaceSelected={(place) => {
            setMarkerMap(place?.formatted_address);
          }}
          className={styles.inputAutocomplete}
          placeholder="Ingresa ubicación (se mostrará en el mapa)"
          options={{
            types: ["geocode", "establishment"],
          }}
        />
        <iframe
          width="500"
          height="400"
          frameBorder="0"
          className={styles.map}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBvCsaNDAvZVVc05EQRWrGYCahzUrNFH-E&q=${markerMap}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.submitContainer}>
        <input
          type="button"
          className={styles.submit}
          value="Crear publicación"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Crear;
