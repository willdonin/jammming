import React from "react";
import Tracklist from "./Tracklist";

export default function SearchResults({ result, addToPlaylist }) {
  return (
    <Tracklist
      title="Search Results"
      tracks={result}
      addToPlaylist={addToPlaylist}
    />
  );
}
