"use client";
import React from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Playlist from "@/components/Playlist";
import Track from "@/components/Track";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";

function makeApiCall(searchInput = "") {
  const result = [];

  if (searchInput === "frozen") {
    const hardCodedResult = [
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
        id: 4,
        name: "Let It Go",
        artist: "Idina Menzel",
        album: "Frozen",
      },
      {
        id: 5,
        name: "Fear of the dark",
        artist: "iron maiden",
        album: "fear of the dark",
      },
      {
        id: 6,
        name: "I can't wait forever",
        artist: "simple plan",
        album: "perfect",
      },
    ];
    return hardCodedResult;
  }

  return result;
}

function createTracklist(items) {
  const list = [];

  Array.from(items).forEach((element) => {
    list.push(<Track song={element} />);
  });

  return list;
}

export default function Home() {
  const [result, setResult] = useState("");
  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState({
    name: "My Playlist",
    tracks: [],
  });

  // * When user changes title for playlist we update the state
  // * variable that holds the title of the playlist.
  function handlePlaylistTitleChange(event) {
    setPlaylist({ ...playlist, name: event.target.value });
  }

  function handleSearch(event) {
    event.preventDefault();
    // * When user searches it will make an API call to spotify
    // * then the result will be stored on result->useState.
    setResult(makeApiCall(event.target.value));

    // * We then create a list of tracks with the result of the API call.
    // * we store the tracks inside the tracklist variable.
    setTracklist(createTracklist(result));
  }

  return (
    <>
      <Nav />
      <div className="m-4 lg:mx-28 xl:mx-56 ">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mx-4 lg:mx-28 xl:mx-56 my-10 flex flex-wrap gap-4 justify-center sm:flex-nowrap">
        <SearchResults items={tracklist} />
        <Playlist
          playlistTitle={playlist.name}
          items={playlist.tracks}
          onTitleChange={handlePlaylistTitleChange}
        />
      </div>
    </>
  );
}
