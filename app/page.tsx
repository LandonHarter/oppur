import { Metadata } from "next";
import { basicMetadata } from "./backend/seo";
import React from 'react'

export const metadata: Metadata = basicMetadata({
  title: "Workage",
  localPath: "/",
});

export default function Home() {
  return (
    <main>
      <h1>Heading</h1>
    </main>
  );
}
