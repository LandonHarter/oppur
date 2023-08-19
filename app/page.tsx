import { Metadata } from "next";
import { basicMetadata } from "./backend/seo";

export const metadata: Metadata = basicMetadata({
  title: "Workage",
  localPath: "/",
});

export default function Home() {
  return (
    <main>

    </main>
  );
}
