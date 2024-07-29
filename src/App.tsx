import { Navbar, Playlist } from "./components";
import { playlistOne } from "./data/mock-data";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Navbar />
      <body className={styles.body}>
        <Playlist playlistItems={playlistOne} />
      </body>
    </>
  );
}
