import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Apply Tailwind typography styles to content
    wrapper: ({ children }) => <div className="prose dark:prose-invert max-w-none">{children}</div>,
    
    // Override the default img with Next.js Image
    img: ({ src, alt, width, height, ...props }) => {
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={Number(width) || 600}
          height={Number(height) || 400}
          className="rounded-md"
          {...props}
        />
      );
    },

    // Add custom styling to headings and other elements
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    
    // Add table styling (optional - prose classes should handle this)
    table: ({ children }) => <table className="table-auto border-collapse border border-gray-300 w-full">{children}</table>,
    th: ({ children }) => <th className="border border-gray-300 px-4 py-2 font-semibold text-left">{children}</th>,
    td: ({ children }) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
    
    // Pass any other components or props at the end
    ...components,
  };
} 