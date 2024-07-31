import { useCallback, useEffect, useState } from "react";

import { IPlaylistItem } from "../../data";

export const usePlayUnit = (
    playItem: IPlaylistItem,
    audio: React.MutableRefObject<HTMLAudioElement | null>,
    nextTrackAction: () => void
) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const reset = useCallback(() => {
    if (audio.current == null) { return; }
    audio.current?.load();
    audio.current.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  }, [playItem, audio])

  useEffect(() => {
    reset();
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

  const repeat = () => {
    reset();
    play();
  }

  const handleTimeUpdate = () => {
    if (audio.current == null) { return; }
    setCurrentTime(audio.current.currentTime);
    if (audio.current.currentTime === duration && duration !== 0) {
      setIsPlaying(false);
      nextTrackAction();
    }
  };

  const handleLoadedData = () => {
    play();
  }

  const fastForward = () => {
    if (audio.current == null) { return; }
    const newTime = audio.current.currentTime + 20
    audio.current.currentTime = newTime > duration
      ? audio.current.currentTime = duration
      : audio.current.currentTime = newTime
    if (currentTime === duration) {
      setIsPlaying(false);
    }
  }

  const fastRewind = () => {
    if (audio.current == null) { return; }
    const newTime = audio.current.currentTime - 20
    audio.current.currentTime = newTime < 0
      ? audio.current.currentTime = 0
      : audio.current.currentTime = newTime
  }

  return {
    currentTime,
    duration,
    isPlaying,
    play,
    pause,
    repeat,
    handleTimeUpdate,
    handleLoadedData,
    fastForward,
    fastRewind
  }
}