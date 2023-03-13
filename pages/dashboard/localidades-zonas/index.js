import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWR, { mutate } from "swr";
import { deleteLocality, postLocality, puttLocality } from "../../../services";
import styles from "../../../styles/LocalitiesZones.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Accordion from "../../../components/Accordion";
import Head from "next/head";
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dataModification = data.localities.map((item) => ({
        ...item,
      }));
      return dataModification;
    });

const LocalitiesZones = () => {
  const { data, error } = useSWR("/api/locality", fetcher);
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      locality: "",
    },
  });

  const onSubmitZone = async (e, id) => {
    e.preventDefault();
    try {
      const update = await puttLocality(e.target["zone"].value, id, "add");
      toast.success("Zona/Barrio agregada exitosamente");
      mutate("/api/locality");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onDeleteZone = async (zone, id) => {
    try {
      const update = await puttLocality(zone, id, "del");
      toast.success("Zona/Barrio eliminada exitosamente");
      mutate("/api/locality");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await postLocality(data);
      toast.success("Localidad agregada exitosamente");
      mutate("/api/locality");
      reset();
    } catch (error) {
      toast.success("Ha ocurrido un error");
    }
  };
  const onDeleteLocality = async (id) => {
    try {
      await deleteLocality(id);
      toast.success("Localidad eliminada exitosamente");
      mutate("/api/locality");
      reset();
    } catch (error) {
      toast.success("Ha ocurrido un error");
    }
  };
  return (
    <div className={styles.localityZonePage}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Localidades y zonas</h1>
      <div className={styles.localityZoneContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formRow}>
            <label>
              <input
                type="text"
                {...register("locality")}
                placeholder="Agregar localidad"
              />
            </label>
          </div>
          <input type="submit" value="Agregar" className={styles.submit} />
        </form>
        <div className={styles.accordionContainer}>
          {data &&
            data.map((item, idx) => (
              <Accordion
                item={item}
                key={idx}
                onDeleteLocality={onDeleteLocality}
                onDeleteZone={onDeleteZone}
              >
                <div className={styles.accordionZonesAdd}>
                  <form onSubmit={(e) => onSubmitZone(e, item.id)}>
                    <input
                      type="text"
                      name="zone"
                      placeholder="Agregar zona/barrio"
                    />
                    <input type="submit" value="Agregar" />
                  </form>
                </div>
              </Accordion>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocalitiesZones;
