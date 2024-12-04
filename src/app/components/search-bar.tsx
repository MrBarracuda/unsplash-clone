"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import { dark } from '@clerk/themes'


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
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
