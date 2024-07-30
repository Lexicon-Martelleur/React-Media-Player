import { ReactElement } from "react";

import { IIcon } from "../../types";
import styles from "./Icon.module.css";

interface Props {
  icon: IIcon;
  size?: IconSizeType;
}

export const Icon: React.FC<Props> = ({
  icon,
  size
}): ReactElement => {
  return (
    <>
      {(size === "small" || size == null) && <img {...icon} />}
      {size === "medium" && <img className={styles.medium} {...icon} />}
      {size === "large" && <img className={styles.large} {...icon} />}
      {size === "xlarge" && <img className={styles.xlarge} {...icon} />}
    </>
  );
}
