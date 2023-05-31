import React from "react";
import Track from "./Track";

// ** This object holds all styles for the Tracklist component.
// ** we keep the code DRY here.
const style = {
  box: "basis-full sm:basis-6/12 bg-purple-600/[0.40] rounded-lg p-4",
  title:
    "text-center w-full py-2 border rounded font-bold bg-purple-600/25 border-purple-400/75 mb-4 ",
  noResult:
    "flex justify-center py-4 px-2 border-b border-purple-400/75 last:border-none capitalize ",
};

export default function Tracklist({
  title,
  tracks,
  placeholder,
  onChange,
  addToPlaylist,
  onRemove,
  remove,
}) {
  return (
    <div className={style.box}>
      {/* If component title is true then we display the title
          else we display a title as an input value */}
      {title ? (
        <h2 className={style.title}>{title}</h2>
      ) : (
        <input
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          className={style.title}
          required
        />
      )}
      <ul className="max-h-[400px] overflow-scroll">
        {/* if the component contains track we are going to display it
            else we will show that the result is empty. */}
        {tracks.length ? (
          tracks.map((track) => (
            <Track
              track={track}
              addToPlaylist={addToPlaylist}
              removeFromPlaylist={onRemove}
              remove={remove ? true : false}
            />
          ))
        ) : (
          <li className={style.noResult}>
            <p class="">0 results found.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
