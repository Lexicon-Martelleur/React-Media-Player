import { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { PlaylistItem } from "./PlaylistItem";

interface Props {
  playlistItems: IPlaylistItem[];
}

export const Playlist: React.FC<Props> = ({
  playlistItems
}): ReactElement => {
  return (
      <>
        {playlistItems.map(item => <PlaylistItem
          key={item.id}
          playlistItem={item}
        />)}
      </>
  )
}