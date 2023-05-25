import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist({
  result,
  playlistTitle,
  onTitleChange,
  onRemove,
}) {
  return (
    <Tracklist
      inputTitle={playlistTitle}
      tracks={result}
      onChange={onTitleChange}
      onRemove={onRemove}
      remove
    />
  );
}
