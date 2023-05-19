import React from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Playlist from "@/components/Playlist";
import SearchResults from "@/components/SearchResults";

const songs = [
  {
    id: 1,
    name: "Let It Go",
    artist: "Idina Menzel",
    album: "Frozen",
  },
  {
    id: 2,
    name: "Fear of the dark",
    artist: "iron maiden",
    album: "fear of the dark",
  },
  {
    id: 3,
    name: "I can't wait forever",
    artist: "simple plan",
    album: "perfect",
  },
  {
    id: 1,
    name: "Let It Go",
    artist: "Idina Menzel",
    album: "Frozen",
  },
  {
    id: 2,
    name: "Fear of the dark",
    artist: "iron maiden",
    album: "fear of the dark",
  },
  {
    id: 3,
    name: "I can't wait forever",
    artist: "simple plan",
    album: "perfect",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <div className="py-10 mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
        <SearchBar />
      </div>
      <div className="flex flex-wrap">
        <div className="py-3 mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
          <SearchResults items={songs} />
        </div>
        <div className="py-3 mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
          <Playlist items={songs} />
        </div>
      </div>
    </>
  );
}
