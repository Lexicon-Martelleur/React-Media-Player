import { ReactElement } from "react";

import styles from "./Navbar.module.css";

interface Props {
  title: string;
  isStartPage: boolean;
  onNavigateBack: () => void;
}

export const Navbar: React.FC<Props> = ({
  title,
  isStartPage,
  onNavigateBack
}): ReactElement => {
  return (
    <>
      <nav className={styles.navbar}>
        {!isStartPage && <span 
          className={`material-symbols-outlined ${styles.navbarIcon}`}
          onClick={() => onNavigateBack()}>
          chevron_left
        </span>}
        <h1 className={styles.navbarTitle}>
          {title}
        </h1>
        <span 
          className={`material-symbols-outlined ${styles.navbarIcon}`}>
          more_vert
        </span>
      </nav>
    </>
  )
}
