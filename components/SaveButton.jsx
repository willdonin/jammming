"use client";
import React from "react";

export default function SaveButton({ onButtonClick, id }) {
  function handleClick(event) {
    alert(event.target.value);
  }

  return (
    <button
      className="border px-1.5 rounded-full hover:bg-purple-700 hover:border-purple-400"
      value={id}
      onClick={handleClick}
      type="button"
    >
      +
    </button>
  );
}
