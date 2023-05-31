"use client";
import { useState, useEffect } from "react";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [code, setCode] = useState("");
  useEffect(() => {
    const token = new URLSearchParams(
      window.location.hash.replace("#", "?")
    ).get("access_token");

    setCode(token);
  }, []);

  return code ? <Dashboard code={code} /> : <Login />;
}
