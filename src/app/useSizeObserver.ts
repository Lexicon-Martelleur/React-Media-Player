import { useCallback, useEffect, useState } from "react";

import { breakPointsWidth } from "../styles/breakpoints";

const screenType = {
   mobile: "mobile",
   desktop: "desktop" 
} as const;

type ScreenType = typeof screenType[
    keyof typeof screenType
];

export const useSizeObserver = () => {
  const [screen, setScreen] = useState<ScreenType>("mobile");

  const handleSizeChange = useCallback(() => {
    if (window.innerWidth <= breakPointsWidth.tablet) {
      setScreen(screenType.mobile);
    } else {
      setScreen(screenType.desktop);
    }
  }, [])
  
  useEffect(() => {
    handleSizeChange();
    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, [])

  const isSmallScreen = () => {
    return screen === screenType.mobile;
  }

  const isLargeScreen = () => {
    return screen === screenType.desktop;
  }

  return {
    isSmallScreen,
    isLargeScreen
  };
}
