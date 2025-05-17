"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("/card.png");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 mb-8">

        {/* Dark mode example, how to apply dark mode */}
          <h2>1. This is a Dark Mode example</h2>
          <p>Click the ☀️ or 🌙 icon to toggle the theme.</p>
          <p>The theme is set in the globals.css file, and ThemeWrapper is used in the layout.tsx file.</p>
        </div>
        {/* Group-hover  Peer-hover example */}
        <div className="flex flex-col gap-2">
          <h2>T2. his is a group-hover example</h2>
          <div className="peer/my-peer group/my-group grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400">
            <div className="h-5 w-5 bg-black group-hover/my-group:bg-red-800"></div>
            <div className="h-5 w-5 bg-black group-hover/my-group:bg-green-800"></div>
          </div>

          <h2>3. This is a peer-hover example</h2>
          <div className="h-20 w-20 bg-green-400 peer-hover/my-peer:bg-red-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <h2>4. What you can do with group-hover (Sample Picture)</h2>
          <Image
            src={image}
            onMouseOver={() => setImage("/hover-card.png")}
            onMouseOut={() => setImage("/card.png")}
            alt="group"
            width={300}
            height={300}
          />
        </div>

        {/* animation example */}
        <div className="flex flex-col gap-8">
          <h2>5. This is an animation example</h2>
          <div className="flex gap-8">animate-ping: <div className="w-fit animate-ping">👍</div></div>
          <div className="flex gap-8">animate-spin: <div className="w-fit animate-spin">|</div></div>
          <div className="flex gap-8">animate-bounce: <div className="w-fit animate-bounce">🎾</div></div>
          <div className="flex gap-8">animate-pulse: <div className="font-bold text-purple-400 animate-pulse">Subscribe 🔔</div></div>
        </div>


        {/* extend tailwind css */}
        <div className="flex flex-col gap-8">
          <h2>6. Extend tailwind example</h2>
          {/* <div className="w-40 h-20 rounded-lg neon-shadow"></div> */}
          <p>`neon-shadow` this is a custom class from globals.css</p>
          <div className="w-40 h-20 rounded-lg neon-shadow"></div>
          <p>`shadow-neon` this is a theme extend from @config "../tailwind.config.js";</p>
          <div className="w-40 h-20 rounded-lg shadow-neon"></div>

          <p>`neon-*` this is a custom class from tailwind.config.js plugin</p>
          <div className="flex flex-row gap-8">
            <div className="w-40 h-20 rounded-lg neon-yellow"></div>
            <div className="w-40 h-20 rounded-lg neon-blue"></div>
            <div className="w-40 h-20 rounded-lg neon-green"></div>
            <div className="w-40 h-20 rounded-lg neon-red"></div>
            <div className="w-40 h-20 rounded-lg neon-purple"></div>
          </div>
        </div>

        
      </main>
    </div>
  );
}
