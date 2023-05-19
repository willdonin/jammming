import React from "react";
import Tracklist, { getTracks } from "./Tracklist";

export default function SearchResults({ items }) {
  return <Tracklist title="Search Results" tracks={getTracks(items)} />;
}
