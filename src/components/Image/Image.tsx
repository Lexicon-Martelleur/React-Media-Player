import { ReactElement } from "react";
import { IImage } from "../../types";

import styles from "./Image.module.css";

interface Props {
  image: IImage;
}

export const Image: React.FC<Props> = ({
  image
}): ReactElement => {
  return (
    <figure className={styles.image}>
      <img src={image.src} alt={image.alt} />
    </figure>
  );
}
