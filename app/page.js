"use client";
import React, { useEffect } from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Playlist from "@/components/Playlist";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";
import SaveButton from "@/components/SaveButton";
import axios from "axios";

export default function Home() {
  // * here we store some state variables for the aplication.
  // * result will have tracks fetched from the api by the
  // * search string. Playlist will store the items added
  // * by the user.
  const [result, setResult] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [playlist, setPlaylist] = useState({
    name: "My Playlist",
    tracks: [],
  });

  //* token will be store here.
  const [token, setToken] = useState("");

  // * constant variables for spotify connection.
  const CLIENT_ID = "9e07c60e324140db84da597fe148a59b";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    //* we use the useeffect to get the token from spotify.
    //* if token is present we set the token otherwise
    //* we get the new token from the browser hash.
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  // * this logout the user from spotify by
  // * removing the token from local storage.
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // * Here we handle the api search, we connect to
  // * the spotify api with axios and we update the
  // *  result array with new search items.
  const handleSearchTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchString,
        type: "track",
      },
    });
    setResult(data.tracks.items);
  };

  // * When user changes title for playlist we update the state
  // * variable that holds the title of the playlist.
  function handlePlaylistTitleChange(event) {
    setPlaylist({ ...playlist, name: event.target.value });
  }

  // * when the user search the input we set the new input
  // * to the searchString.
  function handleSearch(event) {
    // * Prevents from reloading.
    event.preventDefault();

    setSearchString(event.target.value);
  }

  // * this function handles how to add a track to the playlist.
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

  // * implements the save functionality to spotify.
  function handleSaveToSpotify() {
    const trackIds = playlist.tracks.map((track) => track.id);
    alert(trackIds);
    // TODO: Need to implement save function with API.
  }

  return (
    <>
      <Nav />
      <div className="m-4 lg:mx-28 xl:mx-56 ">
        <SearchBar onSearch={handleSearch} searchTracks={handleSearchTracks} />
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
      <div className="text-center m-4 lg:mx-28 xl:mx-56">
        <SaveButton onClick={handleSaveToSpotify} />
      </div>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </>
  );
}
