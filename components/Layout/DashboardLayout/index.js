import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useAppContext from "../../../context/useAppContext";
import Loader from "../../Loader";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  const { logout, initializing, user } = useAppContext();
  const router = useRouter();

  if (initializing) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (router.pathname.includes("/dashboard/iniciar-sesion")) {
    return <div>{children}</div>;
  }

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.menuDashboard}>
        <div>
          <Link href="/">
            <a>
              <img src="/logo.png" alt="logo" />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/dashboard">
                <a>Propiedades</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/localidades-zonas">
                <a>Localidades</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/mensajes">
                <a>Mensajes</a>
              </Link>
            </li>
            <li>
              <p onClick={() => logout()}>Cerrar sesión</p>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
