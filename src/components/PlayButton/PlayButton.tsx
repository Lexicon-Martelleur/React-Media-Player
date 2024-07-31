import { ReactElement } from "react";

import { icons } from "../../assets";
import { Icon, IconSizeType } from "../Icon";
import styles from "./PlayButton.module.css";

interface Props {
  size?: IconSizeType
}

export const PlayButton: React.FC<Props> = ({
  size
}): ReactElement => {
  return (
    <>
      <Icon size={size ?? "small"} icon={icons.play} className={styles.playButton}/>
    </>
  );
}
