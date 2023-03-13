import React from "react";
import styles from "../../styles/Dashboard.module.scss";
import { useRouter } from "next/router";
const DashboardCards = ({ item }) => {
  const router = useRouter();
  const onNavigateTo = () => {
    router.push(item.link);
  };
  return (
    <div onClick={onNavigateTo} className={styles.dashboardCard}>
      {item.icon}
      <h2>{item.title}</h2>
    </div>
  );
};

export default DashboardCards;
