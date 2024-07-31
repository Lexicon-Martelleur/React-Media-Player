import { ReactElement, useRef } from "react";

import styles from "./PlayProgressBar.module.css";
import { usePlayProgressBar } from "./usePlayProgressBar";

interface Props {
  duration: number;
  currentTime: number; 
}

export const PlayProgressBar: React.FC<Props> = ({
  duration,
  currentTime
}): ReactElement => {
  const innerProgressBar = useRef<HTMLDivElement | null>(null)
  const { secondsToMinutes } = usePlayProgressBar(innerProgressBar, currentTime, duration);

  return (
    <div className={styles.playProgressBarCtr}>
      <span>{secondsToMinutes(currentTime)}</span>
      <div className={styles.playProgressBarOuter}>
        <div ref={innerProgressBar} className={styles.playProgressBarInner} />
      </div>
      <span>{secondsToMinutes(duration)}</span>
    </div>
  )
}