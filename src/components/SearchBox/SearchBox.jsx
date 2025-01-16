import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const searchId = useId();

  return (
    <>
      <label htmlFor={searchId} className={styles.inputLabel}>
        Find contacts by name
      </label>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          id={searchId}
          type="text"
          name="search"
          value={filter}
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </div>
    </>
  );
};

export default SearchBox;
