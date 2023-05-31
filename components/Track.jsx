"use client";
import React from "react";
import TrackButton from "./TrackButton";
import Image from "next/image";

// * This styles the track. All tracks have a standard style
// * and depending on he item we add some extra styling.
const style = {
  name: "flex justify-between items-center px-2 py-4 border-b border-purple-400/75 last:border-none capitalize auto-rows-min",
  artist: "text-gray-400/75",
};

export default function Track({
  track,
  addToPlaylist,
  removeFromPlaylist,
  remove,
}) {
  return (
    <li key={track.id} className={style.name}>
      <img src={track.albumUrl} />
      <div className="w-full mx-5 items-start">
        <p>{track.title}</p>
        <p className={style.artist}>{track.artist}</p>
      </div>

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
