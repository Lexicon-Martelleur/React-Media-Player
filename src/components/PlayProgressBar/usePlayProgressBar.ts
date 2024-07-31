import { useEffect } from "react";

export const usePlayProgressBar = (
    innerProgressBar: React.MutableRefObject<HTMLDivElement | null>,
    currentTime: number,
    duration: number
) => {

  useEffect(() => {
    if (innerProgressBar.current == null) { return; }
    const currentTimePercentage = (currentTime / duration) * 100;
    innerProgressBar.current.style.width = `${currentTimePercentage}%`
  }, [])

  const secondsToMinutes = (seconds: number) => {
    const minutes = seconds / 60;
    return minutes.toFixed(2);
  }

  return {
    secondsToMinutes
  };
}