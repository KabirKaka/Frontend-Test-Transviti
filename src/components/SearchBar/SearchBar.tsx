import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Button from "../Button/Button";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string, location: string, jobType: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim(), location, jobType);
  };

  return (
    <form
      className={styles.searchBar}
      role="search"
      aria-label="Job Search"
      onSubmit={handleSubmit}
    >
      <input
        id="jobQuery"
        type="text"
        placeholder="Job Title, Company, or Keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <div className={styles.separator}></div>

      <select
        id="jobLocation"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.select}
      >
        <option value="">Select Location</option>
        <option value="remote">Remote</option>
        <option value="usa">USA</option>
        <option value="pakistan">Pakistan</option>
      </select>
      <div className={styles.separator}></div>
      <select
        id="jobType"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className={styles.select}
      >
        <option value="">Job Type</option>
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>

      <Button
        type="submit"
        className={styles.button}
        leftIcon={<BiSearch size={22} />}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
