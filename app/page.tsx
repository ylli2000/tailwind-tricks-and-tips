"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("/card.png");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 mb-8 max-w-4xl ">

        {/* Dark mode example, how to apply dark mode */}
          <h2>1. Dark Mode Toggle</h2>
          <p>No theme flicker! The app uses cookies to store the user's theme and color-temperature. If cookies exist, the theme is pre-rendered server-side for a seamless experience. If no cookies are set, the system preference is detected in the useTheme hook—this may delay the button render for a moment, but there is never a theme flicker.</p>
          <ul className="list-disc ml-6">
            <li>The app now uses <b>cookies</b> (not localStorage) to store the user's <code>theme</code> (dark/light) and <code>color-temperature</code> (hot/cold).</li>
            <li>On the server, these cookies are read and the values are injected as classes on the <code>&lt;html&gt;</code> tag, allowing for correct initial theme and color rendering with no hydration mismatch or FOUC.</li>
            <li>The client-side <code>fouc.tsx</code> script is no longer needed and has been deleted.</li>
            <li>The <code>ThemeToggle</code> and <code>useTheme</code> hook now receive the initial theme and color values from cookies, ensuring the UI is correct on first render.</li>
            <li>This approach follows Tailwind's recommendation to set theme classes on <code>&lt;html&gt;</code> and provides a seamless SSR experience.</li>
          </ul>
          <p><b>How it works:</b></p>
          <ol className="list-decimal ml-6">
            <li><b>User toggles theme or color temperature:</b> The new value is saved to a cookie using <code>js-cookie</code>.</li>
            <li><b>On each request:</b> The server reads the cookies and sets the appropriate classes on <code>&lt;html&gt;</code>. The initial theme and color are passed to React components for correct initial state.</li>
            <li><b>No FOUC or hydration errors:</b> The initial render always matches between server and client.</li>
          </ol>
        </div>
        {/* Group-hover  Peer-hover example */}
        <div className="flex flex-col gap-2">
          <h2>2. This is a group-hover example</h2>
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
          <div className="flex flex-row gap-8 flex-wrap">
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
