import { useRouter } from "next/router";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import styles from "./Search.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Pin from "../Icons/Pin";
export const Suggestions = ({ suggestions, setSuggestions, setQuery }) => {
  const router = useRouter();
  const onClickLinkHandler = (id) => {
    router.push(`/propiedades/${id}`);
    setSuggestions(null);
    setQuery("");
  };
  const { width } = useWindowDimensions();
  return (
    <div className={styles["search-option"]}>
      <ul>
        {suggestions.map((item, index) => (
          <div onClick={() => onClickLinkHandler(item.slug)} key={index}>
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <p>
                {item.title.slice(0, width > 768 ? 80 : 40)}, {" "}
                {item.locationHeader}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
