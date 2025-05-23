"use client"

import Image from "next/image";
import { useState } from "react";
import MdxDemo from "./components/MdxDemo.mdx";
import { useMDXComponents } from "./mdx-components";

export default function Home() {
  const [image, setImage] = useState("/card.png");
  const mdxComponents = useMDXComponents({});

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 mb-8 max-w-4xl ">

        {/* Dark mode example, how to apply dark mode */}
          <h2>1. Dark Mode Toggle</h2>
          <p>No theme flicker! The app uses cookies to store the user&apos;s theme and color-temperature. If cookies exist, the theme is pre-rendered server-side for a seamless experience. If no cookies are set, the system preference is detected in the useTheme hook—this may delay the button render for a moment, but there is never a theme flicker.</p>
          <ul className="list-disc ml-6">
            <li>The app now uses <b>cookies</b> (not localStorage) to store the user&apos;s <code>theme</code> (dark/light) and <code>color-temperature</code> (hot/cold).</li>
            <li>On the server, these cookies are read and the values are injected as classes on the <code>&lt;html&gt;</code> tag, allowing for correct initial theme and color rendering with no hydration mismatch or FOUC.</li>
            <li>The client-side <code>fouc.tsx</code> script is no longer needed and has been deleted.</li>
            <li>The <code>ThemeToggle</code> and <code>useTheme</code> hook now receive the initial theme and color values from cookies, ensuring the UI is correct on first render.</li>
            <li>This approach follows Tailwind&apos;s recommendation to set theme classes on <code>&lt;html&gt;</code> and provides a seamless SSR experience.</li>
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
          <p>`shadow-neon` this is a theme extend from @config &quot;../tailwind.config.js&quot;;</p>
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

        {/* Size utility example - moving from section 8 to section 7 */}
        <div className="flex flex-col gap-2">
          <h2>7. Size Shorthand</h2>
          <p>Instead of using both <code>w-24 h-24</code>, you can use the more concise <code>size-24</code>.</p>
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 bg-blue-500 flex items-center justify-center">
              w-24 h-24
            </div>
            <div className="size-24 bg-green-500 flex items-center justify-center">
              size-24
            </div>
          </div>
        </div>

        {/* Divide utility example - moving from section 9 to section 8 */}
        <div className="flex flex-col gap-2">
          <h2>8. Divide Utilities</h2>
          <p>Instead of adding margin (<code>my-8</code>) between elements, use <code>divide-y-8</code> to create consistent spacing with dividers.</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col divide-y-4 divide-orange-500">
              <div className="p-4 text-gray-500 bg-gray-100">First item</div>
              <div className="p-4 text-gray-500 bg-gray-100">Second item</div>
              <div className="p-4 text-gray-500 bg-gray-100">Third item</div>
            </div>
          </div>
        </div>

        {/* Space utility example - moving from section 10 to section 9 */}
        <div className="flex flex-col gap-2">
          <h2>9. Space Utilities</h2>
          <p>When <code>flex</code> isn&apos;t applied, you can use <code>space-y-8</code> to create vertical spacing between children.</p>
          <div className="space-y-4">
            <div className="p-4 text-pink-500 bg-purple-100 rounded">First item</div>
            <div className="p-4 text-pink-600 bg-purple-200 rounded">Second item</div>
            <div className="p-4 text-pink-700 bg-purple-300 rounded">Third item</div>
          </div>
        </div>

        {/* Line clamp example - moving from section 11 to section 10 */}
        <div className="flex flex-col gap-2">
          <h2>10. Line Clamp</h2>
          <p>Use <code>line-clamp-3</code> to limit text to a specific number of lines with an ellipsis.</p>
          <div className="flex gap-8">
            <div className="w-64">
              <p className="font-bold">Without line-clamp:</p>
              <p className="bg-gray-100 p-2 rounded text-gray-800 border border-gray-300">
                This is a very long paragraph that will take up multiple lines. It contains enough text to demonstrate how line-clamp works when applied to content that overflows its container.
              </p>
            </div>
            <div className="w-64">
              <p className="font-bold">With line-clamp-3:</p>
              <p className="line-clamp-3 bg-gray-100 p-2 rounded text-gray-800 border border-gray-300">
                This is a very long paragraph that will take up multiple lines. It contains enough text to demonstrate how line-clamp works when applied to content that overflows its container.
              </p>
            </div>
          </div>
        </div>

        {/* Truncate example - moving from section 12 to section 11 */}
        <div className="flex flex-col gap-2">
          <h2>11. Truncate</h2>
          <p><code>truncate</code> is equivalent to <code>line-clamp-1</code> and simpler than using <code>text-ellipsis</code>.</p>
          <div className="flex flex-col gap-4">
            <div className="w-64">
              <p className="font-bold">Without truncate:</p>
              <p className="bg-gray-100 p-2 rounded whitespace-nowrap overflow-hidden text-gray-800 border border-gray-300">
                This is a very long text that will overflow its container without truncation.
              </p>
            </div>
            <div className="w-64">
              <p className="font-bold">With truncate:</p>
              <p className="truncate bg-gray-100 p-2 rounded text-gray-800 border border-gray-300">
                This is a very long text that will overflow its container without truncation.
              </p>
            </div>
          </div>
        </div>

        {/* Button focus example - moving from section 13 to section 12 */}
        <div className="flex flex-col gap-2">
          <h2>12. Button Focus Styling</h2>
          <p>Use <code>focus:outline-none</code> to remove the default browser outline on buttons.</p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Default Focus
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600">
              Custom Focus
            </button>
          </div>
        </div>

        {/* Ring example - moving from section 14 to section 13 */}
        <div className="flex flex-col gap-2">
          <h2>13. Ring Utilities</h2>
          <p>Use <code>ring-1 ring-offset-2</code> for custom focus indicators that aren&apos;t borders or outlines.</p>
          <div className="flex gap-4">
            <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded">
              Normal Button
            </button>
            <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded ring-2 ring-offset-2 ring-[var(--border)]">
              With Ring
            </button>
          </div>
        </div>

        {/* Gradient example - moving from section 15 to section 14 */}
        <div className="flex flex-col gap-2">
          <h2>14. Gradient Backgrounds</h2>
          <p>Create beautiful gradients with <code>bg-gradient-to-r</code> and <code>from/via/to</code> utilities.</p>
          <div className="flex flex-col gap-4">
            <div className="h-20 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <div className="h-20 w-full bg-gradient-to-r from-blue-500 from-10% via-pink-500 via-50% to-purple-500 to-90% rounded"></div>
          </div>
        </div>

        {/* Screen reader example - moving from section 16 to section 15 */}
        <div className="flex flex-col gap-2">
          <h2>15. Screen Reader Accessibility</h2>
          <p>Use <code>sr-only</code> to hide content visually but keep it accessible to screen readers.</p>
          <div className="flex gap-4 items-center">
            <button className="bg-blue-500 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
            <span>← Icon with text only visible to screen readers</span>
          </div>
          <div className="mt-4">
            <p>Use <code>not-sr-only</code> to make screen-reader-only content visible again:</p>
            <div className="flex gap-4 items-center">
              <span className="sr-only focus:not-sr-only">This text is hidden until focused</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Focus the text</button>
            </div>
          </div>
        </div>

        {/* Typography example - moving from section 7 to section 16 */}
        <div className="flex flex-col gap-2 mt-6">
          <h2>16. Tailwind Typography Plugin</h2>
          <p>The @tailwindcss/typography plugin provides a set of &apos;prose&apos; classes that make any HTML look nicely formatted.</p>
          <div className="bg-gray-100 p-3 rounded text-gray-800 mb-3 border border-gray-300">
            <p className="font-bold">Installation:</p>
            <pre className="overflow-x-auto p-2 bg-gray-200 rounded"><code>npm install -D @tailwindcss/typography</code></pre>
            <p className="mt-2 font-bold">Configuration:</p>
            <p className="text-sm text-gray-700 mt-1">Add the plugin to your tailwind.config.js file:</p>
            <div className="bg-gray-200 p-2 rounded font-mono text-sm overflow-x-auto">
              {`// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}`}
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
            <h3>Sample Markdown Content</h3>
            <p>This entire block is styled with just the <code>prose</code> class.</p>
            <ul>
              <li>Lists are properly indented</li>
              <li>With appropriate spacing</li>
            </ul>
            <p>Code blocks get nice styling too:</p>
            <pre><code>const greeting = &apos;Hello world!&apos;;</code></pre>
            <blockquote>
              <p>Blockquotes look great with minimal effort.</p>
            </blockquote>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice</td>
                  <td>Developer</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>Designer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* MDX example - keeping as section 17 */}
        <div className="flex flex-col gap-2 mt-6">
          <h2>17. MDX Integration</h2>
          <p>Next.js 15 comes with built-in MDX support, allowing you to use markdown with JSX components.</p>
          <div className="bg-gray-100 p-3 rounded text-gray-800 mb-3 border border-gray-300">
            <p className="font-bold">Installation:</p>
            <div className="bg-gray-200 p-2 rounded font-mono text-sm overflow-x-auto">
              {`npm install @next/mdx @mdx-js/loader @mdx-js/react`}
            </div>
            <p className="mt-2 font-bold">Configuration (next.config.mjs):</p>
            <div className="bg-gray-200 p-2 rounded font-mono text-sm overflow-x-auto whitespace-pre">
              {`import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);`}
            </div>
            <p className="mt-2 font-bold">Add <code>mdx-components.tsx</code> hook to your project</p>
            <div className="bg-gray-200 p-2 rounded font-mono text-sm overflow-x-auto whitespace-pre">
              {`// mdx-components.tsx
import { useMDXComponents } from '@/app/mdx-components';

export default function MDXComponents(props: MDXComponents) {
  return <MDXContent components={useMDXComponents(props)} />;
}`}
            </div>
          </div>
          <div className="mt-2 border border-gray-300 rounded-lg p-4 bg-[var(--background)]">
            <h3 className="text-xl font-bold mb-4">Live MDX Demo (with explicit components):</h3>
            <MdxDemo components={mdxComponents} />
          </div>
        </div>
      </main>
    </div>
  );
}
