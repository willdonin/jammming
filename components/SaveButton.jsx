"use client";
import React from "react";

export default function SaveButton({ onClick }) {
  return (
    <button
      className="border px-1.5 rounded-full hover:bg-purple-700 hover:border-purple-400"
      onClick={onClick}
      type="button"
    >
      +
    </button>
  );
}
