import { useEffect } from "react";

export const usePlayProgressBar = (
    innerProgressBar: React.MutableRefObject<HTMLDivElement | null>,
    currentTime: number,
    duration: number
) => {

  useEffect(() => {
    if (innerProgressBar.current == null) { return; }
    let currentTimePercentage = (currentTime / duration) * 100;
    currentTimePercentage = isNaN(currentTimePercentage) ? 0 : currentTimePercentage;
    innerProgressBar.current.style.width = `${currentTimePercentage}%`;
  })

  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remindingSeconds = seconds - (minutes * 60);
    return `${minutes}.${Math.floor(remindingSeconds)}`;
  }

  return {
    secondsToMinutes
  };
}