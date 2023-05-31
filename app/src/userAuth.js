import { useState, useEffect } from "react";
import axios from "axios";

// -- CONSTANTS -------------------------------------------------------------------
const CLIENT_ID = "9e07c60e324140db84da597fe148a59b";
const REDIRECT_URI = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = [
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-private",
  "user-read-email",
];
const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE.join(
  " "
)}`;

// @END ---------------------------------------------------------------------------

export default function userAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(async () => {
    if (!code) return;
    await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${code}`,
        },
      })
      .then((res) => {
        setAccessToken(code);
        setExpiresIn(3600);

        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  useEffect(() => {
    if (!accessToken || !expiresIn) return;
    const interval = setInterval(() => {
      window.location = AUTH_URL;
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [accessToken, expiresIn]);

  return accessToken;
}
