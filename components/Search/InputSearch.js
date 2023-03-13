import { useRef, useState } from "react";
import { Suggestions } from "./Suggestions";
import { AiOutlineSearch } from "react-icons/ai";
//import BASE_URL from "../../utils/constants/base_url";
import useClickOutsideRef from "../../hooks/useClickOutsideRef";
import toast from "react-hot-toast";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
const createQuery = (str) => {
  let queryArray = str.split(" ").reduce((ac, item, idx) => {
    if (!item.trim().length) return ac;
    return !idx ? ac + "?q=" + item : ac + "&q=" + item;
  }, "");
  return queryArray;
};

const InputSearch = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [query, setQuery] = useState("");
  const searchContainer = useRef(null);
  const router = useRouter();
  useClickOutsideRef(searchContainer, setSuggestions);
  const onChangeText = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length < 2) {
      return setSuggestions(null);
    }
    const queryArray = createQuery(value);
    try {
      const response = await fetch(`/api/generalSearch${queryArray}`);
      const data = await response.json();
      data?.data?.length ? setSuggestions(data.data) : setSuggestions(null);
    } catch (error) {
      toast.error("¡Ocurrio un error.Vuelve a intentar!");
    }
  };

  const onSubmit = () => {
    if (!query.trim()) return;
    const queryArray = createQuery(query);
    router.push(`/busqueda/${queryArray}`);
  };

  return (
    <>
      <div className={styles["search-container"]} ref={searchContainer}>
        <div className={styles["search-input-container"]}>
          <input type="text" onChange={onChangeText} value={query} />
          <AiOutlineSearch
            color="#3d3d3c"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={onSubmit}
          />
        </div>

        {suggestions && query.length > 1 && (
          <Suggestions
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            setQuery={setQuery}
          />
        )}
      </div>
    </>
  );
};

export default InputSearch;
