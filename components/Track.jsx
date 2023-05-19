import React from "react";

export default function Track({ id, name, artist, album }) {
  return (
    <li
      className="flex justify-between items-center py-3 px-2 border-b border-purple-400/75 last:border-none capitalize"
      key={id}
    >
      <p>
        {name} ({album})
        <span className="pl-2 text-gray-400/75">
          <span className="lowercase">by</span> {artist}
        </span>
      </p>
      <div className="border px-1.5 rounded-full hover:bg-purple-700 hover:border-purple-400">
        <button className="">+</button>
      </div>
    </li>
  );
}
