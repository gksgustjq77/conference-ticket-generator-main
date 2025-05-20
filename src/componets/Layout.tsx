import React, { type ReactNode } from "react";
import styles from "./css/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div
    className={`${styles.container} grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1`}
  >
    <div className={styles.patternTop}>
      <div
        className={`${styles.content} text-sm sm:text-base md:text-sm lg:text-xl`}
      >
        {children}
      </div>
      <div className={styles.anotherElement}></div>
    </div>
  </div>
);

export default Layout;
