import React, { useEffect, useState } from "react";
import styles from "./Properties.module.scss";
import { IoFilterSharp, IoCloseCircleOutline } from "react-icons/io5";
import { FaRegBuilding, FaWarehouse } from "react-icons/fa";
import { BsPinMap } from "react-icons/bs";
import { GiSpookyHouse, GiHomeGarage } from "react-icons/gi";
import Card from "../Card";
import BoxMoreInfo from "../Boxes/BoxMoreInfo";
import Checkbox from "../Checkbox";
import { useForm, Controller } from "react-hook-form";
import useSWR from "swr";
import { postFilter } from "../../services";
import Loader from "../Loader";
import iconstFilterProperties from "../../utils/constants/iconsFilterProperties";
import { useRouter } from "next/router";
import checks from "../../utils/constants/checks";
import iconstFilterPlaces from "../../utils/constants/iconsFilterPlaces";
import Pin from "../Icons/Pin";
import DetectCheckbox from "../Checkbox/DetectCheckbox";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const Properties = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [properties, setProperties] = useState(null);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [locality, setLocality] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [bedrooms, setBedrooms] = useState("0");
  const [bathrooms, setBathrooms] = useState("0");
  const [filterPopUp, setfilterPopUp] = useState(false);

  const { data: dataLocality, error } = useSWR("/api/locality", fetcher);
  const [zones, setZones] = useState([]);

  const { register, handleSubmit, control, reset, resetField, getValues } =
    useForm({
      defaultValues: {
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
      },
    });
  const onChangeCategory = async (path) => {
    setCategory(path);
    try {
      setLoading(true);
      const dataFilter = await postFilter({
        category: path,
        condition,
        locality,
      });
      setProperties(dataFilter.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onChangeCondition = async (path) => {
    setCondition(path);
    try {
      setLoading(true);
      const dataFilter = await postFilter({
        category,
        condition: path,
        locality,
      });
      setProperties(dataFilter.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onChangeLocality = async (path) => {
    setLocality(path);
    try {
      setLoading(true);
      const dataFilter = await postFilter({
        category,
        condition,
        locality: path,
      });
      setProperties(dataFilter.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (dataForm) => {
    try {
      setfilterPopUp(false);
      setLoading(true);
      const dataFilter = await postFilter({
        ...dataForm,
        category,
        condition,
        locality,
        neighborhood,
        bedrooms,
        bathrooms,
      });
      setProperties(dataFilter.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dataLocality || !locality) {
      setZones([]);
      return;
    }
    const filterZones = dataLocality.localities.find(
      (item) => item.locality === locality
    );
    setZones(filterZones.zones);
  }, [locality]);

  const onChangeLocalitySelect = async (e) => {
    setLocality(e.target.value);
  };

  const onChangeNeighborhoodSelect = (e) => {
    setNeighborhood(e.target.value);
  };

  const onDetectCheck = () => {
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [locality, neighborhood, bedrooms, bathrooms]);

  return (
    <div className={styles.propertiesSection}>
      <h3 className={styles.title}>
        Consultanos por las opciones que tenemos para vos...
      </h3>
      <div className={styles.typesContainer}>
        <div className={styles.typesTitles}>
          <h4
            style={{
              backgroundColor: `${
                condition === "venta" ? "#3d3d3c" : "#9e9e9d"
              }`,
              cursor: "pointer",
            }}
            onClick={() => onChangeCondition(`venta`)}
          >
            VENTA
          </h4>
          <h4
            style={{
              backgroundColor: `${
                condition === "alquiler" ? "#3d3d3c" : "#9e9e9d"
              }`,
              textAlign: "right",
              cursor: "pointer",
            }}
            onClick={() => onChangeCondition(`alquiler`)}
          >
            ALQUILER
          </h4>
        </div>
        <div className={styles.typesIconsMobile}>
          {iconstFilterProperties.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                onChangeCategory(`${item.filter.toLocaleLowerCase()}`)
              }
            >
              <img src={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
          {iconstFilterPlaces.map((item, idx) => (
            <div key={idx} onClick={() => onChangeLocality(`${item.filter}`)}>
              <img src={item.icon} />
              <p style={{ width: "70%", textAlign: "center" }}>{item.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.typesIcons}>
          {iconstFilterProperties.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                onChangeCategory(`${item.filter.toLocaleLowerCase()}`)
              }
            >
              <img src={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div
          className={styles.typesIcons}
          style={{ justifyContent: "space-evenly" }}
        >
          {iconstFilterPlaces.map((item, idx) => (
            <div key={idx} onClick={() => onChangeLocality(`${item.filter}`)}>
              <img src={item.icon} />
              <p style={{ width: "70%", textAlign: "center" }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.generalFiltersContainer}>
        <div className={styles.generalFiltersLocation}>
          <div>
            <label>
              <Pin size={20} /> Localidad
            </label>
            <select onChange={onChangeLocalitySelect} value={locality}>
              <option value="">Todas las opciones</option>
              {dataLocality?.localities?.length > 0 &&
                dataLocality.localities.map((item, idx) => (
                  <option value={item.locality} key={idx}>
                    {item.locality}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Zona/Barrio</label>
            <select onChange={onChangeNeighborhoodSelect} value={neighborhood}>
              <option value="">Todas las opciones</option>
              {zones.length > 0 &&
                zones.map((item, idx) => (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className={styles.generalFiltersRooms}>
          <div>
            <label>Dormitorios</label>
            <input
              type="number"
              placeholder="Cantidad"
              min="0"
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label>Baños</label>
            <input
              type="number"
              placeholder="Cantidad"
              min="0"
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.filterSection}>
        <form
          className={styles.filtersContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.filtersContainerDetailsChecks}>
            {checks.map((item, idx) => (
              <label key={idx}>
                <Controller
                  name={item.field}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <DetectCheckbox
                      checked={value}
                      onChange={onChange}
                      onDetectCheck={onDetectCheck}
                    />
                  )}
                />
                {item.name}
              </label>
            ))}
          </div>
        </form>
      </div>
      <div className={styles.propertySection}>
        <div className={styles.highlightedContainer}>
          {properties?.length > 0 &&
            properties.map((item, idx) => (
              <Card key={idx}>
                <BoxMoreInfo item={item} />
              </Card>
            ))}
        </div>
      </div>
      {properties?.length === 0 && (
        <h2 className={styles.notFound}>No se han encontrado resultados...</h2>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Properties;
