import React from "react";
import Tracklist, { getTracks } from "./Tracklist";

export default function Playlist({ items }) {
  return <Tracklist title="Playlist Tracks" tracks={getTracks(items)} />;
}
