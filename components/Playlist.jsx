import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist({ result, onTitleChange, onRemove }) {
  return (
    <Tracklist
      placeholder="My playlist name"
      tracks={result}
      onChange={onTitleChange}
      onRemove={onRemove}
      remove
    />
  );
}
