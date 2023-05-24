import React from "react";
import Tracklist from "./Tracklist";

export default function SearchResults({ items }) {
  return <Tracklist title="Search Results" items={items} />;
}
