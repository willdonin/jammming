import React from "react";

// ** This object holds all styles for the Tracklist component.
// ** we keep the code DRY here.

const style = {
  box: "basis-full sm:basis-6/12 bg-purple-600/[0.40] rounded-lg p-4 ",
  title:
    "text-center w-full py-2 border rounded font-bold bg-purple-600/25 border-purple-400/75 mb-4 ",
  input: "placeholder:text-white ",
  noResult:
    "flex justify-between items-center py-4 px-2 border-b border-purple-400/75 last:border-none capitalize ",
};

export default function Tracklist({ title, items, inputTitle, onChange }) {
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
          placeholder={inputTitle}
          className={style.title + style.input}
        />
      )}
      <ul className="">
        {/* if the component contains track we are going to display it
            else we will show that the result is empty. */}
        {items.length !== 0 ? (
          items
        ) : (
          <li className={style.noResult}>
            <p className="">0 results found.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
