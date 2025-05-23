import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

// Define your MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Inherit parent components
    ...components,
    // Add custom components or override defaults
    h1: (props) => (
      <h1 className="text-2xl md:text-3xl font-medium mt-8 mb-6" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-xl font-medium mt-10 mb-6" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-lg font-medium mt-8 mb-5" {...props} />
    ),
    p: (props) => (
      <p className="mb-6" {...props} />
    ),
    a: ({ href, ...props }) => {
      if (href?.startsWith('/')) {
        return <Link href={href} className="underline hover:text-gray-600" {...props} />;
      }
      if (href?.startsWith('#')) {
        return <a href={href} className="underline hover:text-gray-600" {...props} />;
      }
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
          {...props}
        />
      );
    },
    ul: (props) => (
      <ul className="list-disc pl-5 space-y-4 mb-6" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-5 space-y-4 mb-6" {...props} />
    ),
    li: (props) => <li className="mb-2" {...props} />,
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-6 italic" {...props} />
    ),
    code: (props: React.HTMLProps<HTMLElement>) => (
      <code
        className="bg-gray-100 p-1 rounded text-sm"
        {...props}
      />
    ),
    // Allow regular HTML elements to have proper styling
    strong: (props) => <strong className="font-bold" {...props} />,
    em: (props) => <em className="italic" {...props} />,
  };
} 