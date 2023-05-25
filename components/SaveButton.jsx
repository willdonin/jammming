import React from "react";

const style = {
  button: "py-3 px-5 bg-purple-600 hover:bg-purple-700 rounded-lg",
};

export default function SaveButton({ onClick }) {
  return (
    <button
      className={style.button}
      onClick={onClick}
      title="Save playlist to spotify."
    >
      Add to Spotify
    </button>
  );
}
