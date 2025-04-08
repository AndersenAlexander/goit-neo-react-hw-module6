// src/components/SearchBox/SearchBox.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const [localFilter, setLocalFilter] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setLocalFilter(e.target.value);
  };

  const handleSearch = () => {
    dispatch(changeFilter(localFilter));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={localFilter}
        onChange={handleInputChange}
        placeholder="Search contacts"
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}
