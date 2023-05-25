"use client";
import React from "react";
import SaveButton from "./SaveButton";

export default function Track({ song, addToPlaylist }) {
  return (
    <li
      key={song.id}
      className="flex justify-between items-center px-2 py-4 border-b border-purple-400/75 last:border-none capitalize auto-rows-min [&>button]:ml-2"
    >
      <p className="">
        {song.name} ({song.album})
        <span className="pl-2 text-gray-400/75">
          <span className="lowercase">by</span> {song.artist}
        </span>
      </p>
      <SaveButton onClick={() => addToPlaylist(song.id)} />
    </li>
  );
}
