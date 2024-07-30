import { ReactElement } from "react";

import styles from "./Navbar.module.css";
import { icons } from "../../assets";
import { Icon } from "../Icon";

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
          className={`${styles.navbarItem} ${styles.navbarIcon}`}
          onClick={() => onNavigateBack()}>
          <Icon size="large" icon={icons.prevPage}/>
        </span>}
        <h1 className={styles.navbarItem}>
          {title}
        </h1>
        <span 
          className={`${styles.navbarItem} ${styles.navbarIcon}`}>
          <Icon size="large" icon={icons.moreVertical}/>
        </span>
      </nav>
    </>
  )
}
