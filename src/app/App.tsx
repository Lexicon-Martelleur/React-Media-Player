import { ReactElement } from "react";

import { Navbar } from "../components";
import { useNavigation } from "./useNavigation";
import { usePlaylistService } from "./usePlaylistService";
import { DesktopRoutes, MobileRoutes } from "../routes";
import styles from "./App.module.css";
import { useSizeObserver } from "./useSizeObserver";

export const App = (): ReactElement => {
  const navigation = useNavigation();
  const playlistService = usePlaylistService();
  const { isSmallScreen, isLargeScreen } = useSizeObserver();
  
  return (
    <>
      <Navbar
        title={navigation.getCurrentPageTitle()}
        isStartPage={navigation.isStartPage()}
        onNavigateBack={navigation.prevPage}/>
      <main className={styles.main} >
        {isSmallScreen() && <MobileRoutes navigation={navigation} playlistService={playlistService}/>}
        {isLargeScreen() && <DesktopRoutes navigation={navigation} playlistService={playlistService}/>}
      </main>
    </>
  );
}
