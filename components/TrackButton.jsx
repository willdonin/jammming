"use client";
import React from "react";

// * This styles the button. All buttons have a standard style
// * and depending on he condition we add some extra styling.
const style = {
  button: "ml-2 hover:text-white text-2xl px-2 rounded-full",
  add: "hover:bg-blue-700/75 bg-blue-700/25",
  remove: "hover:bg-red-700/75 bg-red-700/25",
};

// * Our save button component have two different states
// * the save button state and de delete button state.
export default function TrackButton({ onClick, remove }) {
  return (
    <button
      className={style.button.concat(" ", !remove ? style.add : style.remove)}
      onClick={onClick}
      type="button"
      title={!remove ? "Add to playlist." : "Remove from playlist."}
    >
      {!remove ? "+" : "-"}
    </button>
  );
}
