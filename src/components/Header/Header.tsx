import React from "react";
import Logo from "../../assets/logo.svg";
// import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <NavLink to="/" aria-label="FindJobs Home">
            <img src={Logo} alt="Company Logo" width="120" height="40" />
          </NavLink>
        </div>

        <nav className={styles.nav} aria-label="Main Navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-companies"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Top Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job-tracker"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Job Tracker
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-calendar"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                My Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Documents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/messages"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifications"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Notifications
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <SearchInput
            onSearch={(query) => {
              console.log("Header search:", query);
            }}
          />

          <Button className={styles.cta}>Resume Builder</Button>
          <img src={avatar} alt="Albert Flores" className={styles.avatar} />
        </div>
      </div>
    </header>
  );
};
export default Header;
