"use client";
import React from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Playlist from "@/components/Playlist";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";

function makeApiCall(searchInput) {
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

export default function Home() {
  const [result, setResult] = useState([]);
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
    // * Prevents from reloading.
    event.preventDefault();
    // * When user searches it will make an API call to spotify
    // * then the result will be stored on result->useState.
    setResult(makeApiCall(event.target.value));
  }

  //* this function handles how to add a track to the playlist.
  function handleAddToPlaylist(id) {
    // * if the song it is already on the playlist
    // * this function returns.
    const newTrack = result.filter((result) => result.id === id)[0];
    if (
      playlist.tracks.filter((result) => result.id === newTrack.id).length > 0
    ) {
      return;
    }

    // * here we get the playlist and add the song chosen.
    setPlaylist({
      ...playlist,
      tracks: [...playlist.tracks, newTrack],
    });
  }

  function handleRemoveFromPlaylist(id) {
    // * we filter the playlist without the removed item.
    const newList = playlist.tracks.filter((result) => result.id !== id);
    // * here we get the playlist update the playlist
    // * with the new list without the removed item.
    setPlaylist({
      ...playlist,
      tracks: newList,
    });
  }

  return (
    <>
      <Nav />
      <div className="m-4 lg:mx-28 xl:mx-56 ">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mx-4 lg:mx-28 xl:mx-56 my-10 flex flex-wrap gap-4 justify-center sm:flex-nowrap">
        <SearchResults result={result} addToPlaylist={handleAddToPlaylist} />
        <Playlist
          playlistTitle={playlist.name}
          result={playlist.tracks}
          onTitleChange={handlePlaylistTitleChange}
          onRemove={handleRemoveFromPlaylist}
        />
      </div>
    </>
  );
}
