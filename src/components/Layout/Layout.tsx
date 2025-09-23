import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main} role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
