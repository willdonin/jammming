import React from "react";
import Track from "./Track";

export function getTracks(items) {
  const tracks = [];
  items.forEach((item) =>
    tracks.push(
      <Track
        id={item.id}
        name={item.name}
        artist={item.artist}
        album={item.album}
      />
    )
  );
  return tracks;
}

export default function Tracklist({ tracks, title }) {
  return (
    <div className="relative bg-purple-600/[0.40] rounded-lg p-4">
      <h2 className="text-center py-2 border  rounded font-bold bg-purple-600/25 border-purple-400/75 mb-4">
        {title}
      </h2>
      <div className="flex items center">
        <ul className="w-full">
          {tracks.length !== 0 ? (
            tracks
          ) : (
            <li className="text-white text-center">0 results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
