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
    
    // Apply nice code formatting
    code: ({ children }) => <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">{children}</code>,
    pre: ({ children }) => <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto">{children}</pre>,
    
    // Pass any other components or props
    ...components,
  };
} 