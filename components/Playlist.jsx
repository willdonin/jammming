import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist({ result, playlistTitle, onTitleChange }) {
  return (
    <Tracklist
      inputTitle={playlistTitle}
      tracks={result}
      onChange={onTitleChange}
    />
  );
}
