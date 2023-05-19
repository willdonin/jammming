import React from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Tracklist from "@/components/Tracklist";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="py-10 mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
        <SearchBar />
      </div>
      <div className="py-3 mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
        <Tracklist />
      </div>
    </>
  );
}
