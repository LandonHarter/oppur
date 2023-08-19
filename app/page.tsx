'use client'

import { Metadata } from "next";
import { basicMetadata } from "./backend/seo";
import React, { useContext } from 'react'
import { auth } from "./backend/firebase";
import UserContext from "./context/UserContext";

export const metadata: Metadata = basicMetadata({
  title: "Workage",
  localPath: "/",
});

export default function Home() {
  const user = useContext(UserContext);

  return (
    <main>
      <h1>Heading</h1>
      <div style={{ marginTop: 50 }} />

      <h1>Welcome {user ? user.name : "null"}</h1>
      <button onClick={async () => {
        await auth.signOut();
      }}>Sign Out</button>
    </main>
  );
}
