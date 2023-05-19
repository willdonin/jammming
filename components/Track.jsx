import React from "react";
import SaveButton from "./SaveButton";

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
      <SaveButton songId={id} />
    </li>
  );
}
