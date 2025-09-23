import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            onSearch={(query) => console.log("Header search:", query)}
          />
          <Button className={styles.cta}>Resume Builder</Button>
          <img src={avatar} alt="Albert Flores" className={styles.avatar} />

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CgClose size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/top-companies" onClick={() => setMenuOpen(false)}>
                Top Companies
              </NavLink>
            </li>
            <li>
              <NavLink to="/job-tracker" onClick={() => setMenuOpen(false)}>
                Job Tracker
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-calendar" onClick={() => setMenuOpen(false)}>
                My Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" onClick={() => setMenuOpen(false)}>
                Documents
              </NavLink>
            </li>
            <li>
              <NavLink to="/messages" onClick={() => setMenuOpen(false)}>
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink to="/notifications" onClick={() => setMenuOpen(false)}>
                Notifications
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
