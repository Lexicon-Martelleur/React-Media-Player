import { ReactElement } from "react";

import styles from "./Navbar.module.css";

export const Navbar = (): ReactElement => {
  return (
    <>
      <nav className={styles.navbar}>
        <span 
          className={`material-symbols-outlined ${styles["navbar-icon"]}`}>
          chevron_left
        </span>
        <h1 className={styles["navbar-title"]}>Playlist - Mock List</h1>
        <span 
          className={`material-symbols-outlined ${styles["navbar-icon"]}`}>
          more_vert
        </span>
      </nav>
    </>
  )
}
