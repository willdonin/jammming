import React from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="py-10 mx-auto max-w-md">
        <SearchBar />
      </div>
    </>
  );
}
