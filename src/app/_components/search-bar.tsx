"use client";

import styles from "./index.module.css"

import { useRouter } from "next/navigation";
import { useState } from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";


export function Navbar({ query }: { query: string }) {
  const [input, setInput] = useState(query);
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/?query=${encodeURIComponent(input)}`);
  };

  return (
    <div style={{position: "absolute", top: 10, display: "flex", gap: "0.5rem"}}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <Link href="/collection" className={styles.link}>Collection</Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
