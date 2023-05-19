"use client";
import React from "react";

export default function SaveButton({ songId }) {
  return (
    <button
      onClick={() => {
        alert("Song Id: " + songId);
      }}
      className="border px-1.5 rounded-full hover:bg-purple-700 hover:border-purple-400"
      type="button"
    >
      +
    </button>
  );
}
