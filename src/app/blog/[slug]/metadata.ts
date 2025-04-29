import type { Metadata } from "next";

// Default metadata for all blog posts
export const metadata: Metadata = {
  title: "Sam's Thoughts | Blog",
  description: "Read my detailed thoughts on technology, design, and business",
  openGraph: {
    title: "Sam's Thoughts | Blog",
    description: "Thoughts on technology, design, and business",
    images: ['/splitfavicon.svg'],
    type: 'article',
  },
}; 