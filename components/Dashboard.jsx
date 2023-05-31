"use client";
import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Playlist from "@/components/Playlist";
import SearchResults from "@/components/SearchResults";
import SaveButton from "@/components/SaveButton";
import userAuth from "@/app/src/userAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "9e07c60e324140db84da597fe148a59b",
});

export default function Dashboard({ code }) {
  const accessToken = userAuth(code);

  // -- STATE VARIABLES -------------------------------------------------------------
  // * here we store some state variables for the application.
  // * result will have tracks fetched from the api by the
  // * search string. Playlist will store the items added
  // * by the user.
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [playlist, setPlaylist] = useState({
    name: "",
    tracks: [],
  });
  // -- @END ------------------------------------------------------------------------

  // -- USE EFFECT ------------------------------------------------------------------
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (!accessToken) return;
    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResult(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            }
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            album: track.album.name,
            id: track.id,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  // -- @END ------------------------------------------------------------------------

  // -- API CALLS -------------------------------------------------------------------
  //? Create a private playlist
  const createPlaylist = () => {
    spotifyApi
      .createPlaylist(playlist.name, {
        description: "Created from Jamming App",
        public: true,
      })
      .then((res) => {
        console.log("Created playlist!");
        const playlistId = res.body.id;
        addTracks(playlistId);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  };

  // Add tracks to a playlist
  const addTracks = (playlistId) => {
    const tracksURI = playlist.tracks.map((track) => {
      return track.uri;
    });

    spotifyApi
      .addTracksToPlaylist(playlistId, tracksURI)
      .then((res) => {
        console.log("Added tracks to playlist!");
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  };

  // -- @END ------------------------------------------------------------------------

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

    setSearch(event.target.value);
  }

  // * this function handles how to add a track to the playlist.
  function handleAddToPlaylist(id) {
    // * if the song it is already on the playlist
    // * this function returns.
    const newTrack = searchResult.filter((result) => result.id === id)[0];
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
    createPlaylist();
    setPlaylist({ name: "", tracks: [] });
  }

  return (
    <>
      <Nav />
      <div className="m-4 lg:mx-28 xl:mx-56 ">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mx-4 lg:mx-28 xl:mx-56 my-10 flex flex-wrap gap-4 justify-center sm:flex-nowrap">
        <SearchResults
          result={searchResult}
          addToPlaylist={handleAddToPlaylist}
        />
        <Playlist
          result={playlist.tracks}
          onTitleChange={handlePlaylistTitleChange}
          onRemove={handleRemoveFromPlaylist}
        />
      </div>
      <div className="text-center m-4 lg:mx-28 xl:mx-56">
        <SaveButton onClick={handleSaveToSpotify} />
      </div>
    </>
  );
}
