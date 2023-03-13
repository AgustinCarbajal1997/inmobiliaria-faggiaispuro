import React, { useState } from "react";
import Table from "../../components/Table";
import { COLUMNS_FULL_WIDTH } from "../../utils/constants/tableFields";
import stylesTable from "../../components/Table/Table.module.scss";
import styles from "../../styles/Propiedades.module.scss";
import useSWR, { mutate } from "swr";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { deletePublication, setHighlighted } from "../../services";
import toast from "react-hot-toast";
import Checkbox from "../../components/Checkbox";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Loader from "../../components/Loader";
import Head from "next/head";
const Highlight = ({ highlighted, id }) => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(highlighted);

  const onChange = async (state) => {
    try {
      setLoading(true);
      await setHighlighted(id);
      setChecked(state);
      toast.success("Modificado correctamente");
      mutate("/api/realestate");
    } catch (error) {
      toast.error("Ocurrió un error. Vuelva a intentar más tarde");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Checkbox checked={checked} onChange={onChange} />
      {loading && <Loader />}
    </>
  );
};

const Editar = ({ path }) => {
  const router = useRouter();
  return (
    <AiFillEdit
      onClick={() => router.push(path)}
      color="#3e849e"
      size={28}
      style={{ cursor: "pointer" }}
    />
  );
};

const Eliminar = ({ id, slug }) => {
  const [loading, setLoading] = useState(false);
  const onDeleteHandle = async () => {
    try {
      setLoading(true);
      await deletePublication(id, slug);
      toast.success("Eliminado correctamente");
      mutate("/api/realestate");
    } catch (error) {
      toast.error("Ocurrio un error al eliminar");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Popup
        trigger={
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <AiOutlineDelete
              color="#c2002d"
              size={28}
              style={{ cursor: "pointer" }}
            />
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>
              &times;
            </button>
            <div className={styles.headerModal}>
              {" "}
              ¿Está seguro que desea eliminar esta publicación?{" "}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.buttonCancel}
                onClick={() => {
                  close();
                }}
              >
                Cancelar
              </button>
              <button
                className={styles.buttonConfirm}
                onClick={() => {
                  onDeleteHandle();
                  close();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </Popup>
      {loading && <Loader />}
    </>
  );
};

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dataModification = data.propiedades.map((item) => ({
        ...item,
        highlighted: <Highlight highlighted={item.highlighted} id={item._id} />,
        edit: <Editar path={`/dashboard/propiedades/actualizar/${item._id}`} />,
        delete: <Eliminar id={item._id} slug={item.slug} />,
      }));
      return dataModification;
    });

const PropiedadesDashboard = ({}) => {
  const { data, error } = useSWR("/api/realestate", fetcher);
  const router = useRouter();

  if (!data)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className={styles.propertiesPublicationSection}>
      <Head>
        <title>Faggi Aispuro Propiedades</title>
        <meta
          name="description"
          content="BIENES RAÍCES. Estamos para ayudarte."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Propiedades publicadas</h1>
      <div className={styles.buttonContainer}>
        <Button
          title="Crear publicación"
          onClickHandle={() => router.push("/dashboard/propiedades/crear")}
        />
      </div>
      {data && (
        <Table
          dataFields={data}
          columnsFields={COLUMNS_FULL_WIDTH}
          classname={stylesTable}
        />
      )}
    </div>
  );
};

export default PropiedadesDashboard;
