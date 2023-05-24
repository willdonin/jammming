import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist({ items, playlistTitle, onTitleChange }) {
  return (
    <Tracklist
      inputTitle={playlistTitle}
      items={items}
      onChange={onTitleChange}
    />
  );
}
