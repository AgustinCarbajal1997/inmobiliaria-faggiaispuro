import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "../../styles/Details.module.scss";
import { IoIosArrowBack } from "react-icons/io";
export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div
      className={styles.arrowContainerLeft}
      onClick={() => swiper.slidePrev()}
    >
      <IoIosArrowBack color="#fff" size={40} />
    </div>
  );
}
