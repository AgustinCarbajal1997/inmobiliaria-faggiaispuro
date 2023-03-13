import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "../../styles/Details.module.scss";
import { IoIosArrowForward } from "react-icons/io";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div
      className={styles.arrowContainerRight}
      onClick={() => swiper.slideNext()}
    >
      <IoIosArrowForward color="#fff" size={40} />
    </div>
  );
}
