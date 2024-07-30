import { ReactElement } from "react";

import styles from "./Navbar.module.css";

export const Navbar = (): ReactElement => {
  return (
    <>
      <nav className={styles.navbar}>
        <span 
          className="material-symbols-outlined">
          chevron_left
        </span>
        <h1 className={styles.navbarTitle}>
          Playlist - Mock List
        </h1>
        <span 
          className="material-symbols-outlined">
          more_vert
        </span>
      </nav>
    </>
  )
}
