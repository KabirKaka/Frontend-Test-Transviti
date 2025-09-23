import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import Button from "../Button/Button";
import SearchIcon from "../../assets/search.svg";

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
        leftIcon={
          <img src={SearchIcon} alt="Search Icon" className={styles.icon} />
        }
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
