import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form className={styles.searchInput} onSubmit={handleSubmit} role="search">
      <img
        src={SearchIcon}
        alt="Search Icon"
        className={styles.icon}
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search"
      />
    </form>
  );
};

export default SearchInput;
