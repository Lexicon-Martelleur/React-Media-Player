import { useEffect, useState } from "react";

import { IPlaylistItem } from "../../data";

export const usePlayUnit = (
    playItem: IPlaylistItem,
    audio: React.MutableRefObject<HTMLAudioElement | null>
) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio.current == null) { return; }
    audio.current?.load();
    audio.current.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  }, [playItem])

  useEffect(() => {
    if (audio.current == null) { return; }
    const duration = audio.current?.duration ?? 0
    setDuration(isNaN(duration) ? 0 : duration);
  })

  const play = () => {
    if (audio.current == null) { return; }
    setIsPlaying(true);
    audio.current.play();
  }

  const pause = () => {
    if (audio.current == null) { return; }
    setIsPlaying(false);
    audio.current.pause();
  }

  const handleTimeUpdate = () => {
    if (audio.current == null) { return; }
    setCurrentTime(audio.current.currentTime);
  };

  return {
    currentTime,
    duration,
    isPlaying,
    play,
    pause,
    handleTimeUpdate
  }
}