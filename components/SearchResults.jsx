import React from "react";

const songs = [
  {
    id: 1,
    songName: "Let It Go",
    artist: "Idina Menzel",
  },
  {
    id: 2,
    songName: "Fear of the dark",
    artist: "iron maiden",
  },
  {
    id: 3,
    songName: "I can't wait forever",
    artist: "simple plan",
  },
];

export default function SearchResults() {
  return (
    <div className="relative bg-purple-600/[0.40] rounded-lg p-4">
      <div className="flex items center">
        <ul className="w-full">
          {songs.length !== 0 ? (
            songs.map((song) => {
              return (
                <li className="flex justify-between items-center py-3 px-2 border-b border-purple-400/75 last:border-none">
                  <p className="capitalize">
                    {song.songName}
                    <span className="text-gray-200/50 pl-5">
                      by {song.artist}
                    </span>
                  </p>
                  <div className="border px-1.5 rounded-full hover:bg-purple-700 hover:border-purple-400">
                    <button className="">+</button>
                  </div>
                </li>
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
