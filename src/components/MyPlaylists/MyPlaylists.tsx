import { ReactElement } from "react";

import { IPlaylist } from "../../data";
import { PlaylistThumbnail } from "./PlaylistThumbnail";
import styles from "./MyPlaylist.module.css";

interface Props {
  playlists: IPlaylist[];
  onSelectPlaylist: (list: IPlaylist) => void;
}

export const MyPlaylists: React.FC<Props> = ({
  playlists,
  onSelectPlaylist
}): ReactElement => {  
  return (
    <section className={styles.myPlaylist}>
      {playlists.map(list => <PlaylistThumbnail
        key={list.id}
        playlist={list}
        onSelectPlaylist={() => onSelectPlaylist(list)}/>)}
    </section>
  );
}
