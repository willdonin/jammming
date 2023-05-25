"use client";
import React from "react";
import TrackButton from "./TrackButton";

// * This styles the track. All tracks have a standard style
// * and depending on he item we add some extra styling.
const style = {
  name: "flex justify-between items-center px-2 py-4 border-b border-purple-400/75 last:border-none capitalize auto-rows-min",
  artist: "pl-2 text-gray-400/75",
  by: "lowercase",
};

export default function Track({
  track,
  addToPlaylist,
  removeFromPlaylist,
  remove,
}) {
  return (
    <li key={track.id} className={style.name}>
      <p>
        {track.name} ({track.album})
        <span className={style.artist}>
          <span className={style.by}>by</span> {track.artist}
        </span>
      </p>
      <TrackButton
        onClick={() =>
          // * If item is on playlist we display the remove button
          // * with the remove functionality
          !remove ? addToPlaylist(track.id) : removeFromPlaylist(track.id)
        }
        // * tells if is a remove button or not.
        remove={remove ? true : false}
      />
    </li>
  );
}
