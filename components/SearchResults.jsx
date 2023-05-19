import React from "react";
import Track from "./Track";

export default function SearchResults() {
  const songs = [
    {
      id: 1,
      songName: "Let It Go",
      artist: "Idina Menzel",
      album: "Frozen",
    },
    {
      id: 2,
      songName: "Fear of the dark",
      artist: "iron maiden",
      album: "fear of the dark",
    },
    {
      id: 3,
      songName: "I can't wait forever",
      artist: "simple plan",
      album: "perfect",
    },
  ];

  return (
    <div className="relative bg-purple-600/[0.40] rounded-lg p-4">
      <div className="flex items center">
        <ul className="w-full">
          {songs.length !== 0 ? (
            songs.map((song) => {
              return (
                <Track
                  id={song.id}
                  name={song.songName}
                  artist={song.artist}
                  album={song.album}
                />
              );
            })
          ) : (
            <li className="text-white text-center">0 results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
