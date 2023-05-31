import React from "react";
import Link from "next/link";

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

export default function Login() {
  return (
    <div>
      <Link href={AUTH_URL}>Login</Link>
    </div>
  );
}
