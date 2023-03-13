import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import CheckBox from "../../../../components/Checkbox";
import { putPublication } from "../../../../services";
import styles from "../../../../styles/PropiedadesCreate.module.scss";
import Loader from "../../../../components/Loader";
import Head from "next/head";
import checks from "../../../../utils/constants/checks";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data.propiedad);

const Actualizar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/realestate/${id}` : null, fetcher);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      garage: data?.garage || false,
      balcony: data?.balcony || false,
      pool: data?.pool || false,
      barbecue: data?.barbecue || false,
      privateNeighborhood: data?.privateNeighborhood || false,
      backyard: data?.backyard || false,
      grill: data?.grill || false,
      barter: data?.barter || false,
      alarm: data?.alarm || false,
      sum: data?.sum || false,
      elevator: data?.elevator || false,
      laundry: data?.laundry || false,
      credit: data?.credit || false,
      bathrooms: data?.bathrooms || "0",
      bedrooms: data?.bedrooms || "0",
      category: data?.category || "",
      description: data?.description || "",
      locality: data?.locality || "",
      neighborhood: data?.neighborhood || "",
      youtube: data?.youtube || "",
      price: data?.price || "",
      title: data?.title || "",
    },
  });
  const onSubmit = async (dataPublication) => {
    try {
      setLoading(true);
      await putPublication(dataPublication, id, dataPublication.slug);
      toast.success("¡Actualizado correctamente!");
      router.push("/dashboard/propiedades");
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!data) return;
    reset(data);
  }, [data]);

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
      <h1 className={styles.title}>Actualizar publicación</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type="text" {...register("locality")} />
          </label>
          <label>
            Zona/Barrio
            <input type="text" {...register("neighborhood")} />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Habitaciones
            <input type="number" {...register("bedrooms")} />
          </label>
          <label>
            Baños
            <input type="number" {...register("bathrooms")} />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Precio
            <input
              type="text"
              {...register("price", { required: true })}
              style={{ border: errors.price && "1px solid red" }}
              placeholder="Puede insertar precio o el texto que desee"
            />
          </label>
          <label>
            Video de Youtube
            <input
              type="text"
              {...register("youtube")}
              placeholder="Inserte embed url"
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
          <label>Descripcíon</label>
          <textarea
            {...register("description", { required: true })}
            style={{ border: errors.description && "1px solid red" }}
            placeholder="Descripción del inmueble"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <input
          type="submit"
          className={styles.submit}
          value="Actualizar publicación"
        />
      </form>
      {loading && <Loader />}
    </div>
  );
};

export default Actualizar;
