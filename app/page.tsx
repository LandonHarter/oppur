'use client'

import { Metadata } from "next";
import { basicMetadata } from "./backend/seo";
import React, { useContext } from 'react'
import { auth } from "./backend/firebase";
import UserContext from "./context/UserContext";
import Landing from "./landing";

export default function Home() {
  const user = useContext(UserContext);

  return (
    <main>
      <Landing/>
      {/* <div>
      <div style={{ marginTop: 50 }} />

      <h1>Welcome {user ? user.name : "null"}</h1>
      <button onClick={async () => {
        await auth.signOut();
      }}>Sign Out</button>
      </div> */}
    </main>
  );
}
