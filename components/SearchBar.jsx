import React from "react";

export default function SearchBar() {
  return (
    <form>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm ring border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-400/75 outline-0"
          placeholder="Search Songs, Artists..."
          required
        ></input>
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-purple-600 hover:bg-purple-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}
