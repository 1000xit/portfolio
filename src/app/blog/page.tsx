"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import NewsletterModal from '@/components/NewsletterModal';

// Define blog posts metadata
const blogPosts = [
  {
    id: 'paragraphs-over-pages',
    title: 'Paragraphs > Pages',
    date: 'JUN 6',
    summary: "Interactive guide: Why AI picks short, focused paragraphs over long-form content. Includes live examples and conversion tools.",
  },
  {
    id: 'profound-10m-search-study',
    title: "Profound's 10M Search Study: What Actually Works for AI Citations",
    date: 'MAY 23',
    summary: "10 million AI search results revealed which content gets cited by ChatGPT, Perplexity, and Google AIO—and the results will surprise you.",
  },
  {
    id: 'a-new-form-of-seo',
    title: 'A new form of SEO',
    date: 'APR 29',
    summary: "How to get your brand seen by ChatGPT, Perplexity and other LLM\\'s in 2025",
  },
  {
    id: 'seo-is-about-ranking-aeo-is-about-being-the-answer',
    title: 'SEO is About Ranking. AEO is About Being the Answer.',
    date: 'MAY 09', // Derived from "Published May 2025"
    summary: 'Most brands are still playing the wrong game.',
  },
  {
    id: 'how-to-fix-your-website-for-ai-search-aeo',
    title: 'How to fix your website for AI search (AEO)',
    date: 'JUL 14',
    summary: '8 Quick Wins to Make Your Website AI-Ready (AEO Edition)',
  },
  // Add more posts here as needed
];

export default function BlogPage() {
  const router = useRouter();
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // Show newsletter modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-6 sm:pt-10 px-6 sm:px-12 pb-12 bg-white text-[#060606] font-mono animate-in">
      {/* Header Section */}
      <header className="relative w-full max-w-6xl mx-auto flex items-center justify-between mb-8 text-appear">
        {/* Back Arrow */}
        <Link href="/" className="p-1 hover:opacity-70 transition-all duration-200 ease-out hover-scale btn-press" aria-label="Back to home">
          <FiArrowLeft size={20} />
        </Link>
        
        {/* Centered Title */}
        <h1 className="text-sm sm:text-md font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          MY THOUGHTS
        </h1>

        <div className="w-5"></div> {/* Placeholder for symmetry */}
      </header>

      {/* Content Area */}
      <div className="w-full max-w-6xl flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-lg md:text-xl font-medium mb-6 text-appear">All Posts</h2>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="border-b border-gray-200 text-appear">
                  <th className="py-3 pr-6 text-left text-xs sm:text-sm md:text-base font-normal w-1/4">Title</th>
                  <th className="py-3 px-6 text-left text-xs sm:text-sm md:text-base font-normal w-1/6">Date</th>
                  <th className="py-3 pl-6 text-left text-xs sm:text-sm md:text-base font-normal">Summary</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map((post, index) => (
                  <tr 
                    key={post.id} 
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200 ease-out card-hover animate-in-staggered"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => router.push(`/blog/${post.id}`)}
                  >
                    <td className="py-3 pr-6 text-xs sm:text-sm md:text-base">
                      <Link href={`/blog/${post.id}`} className="hover:underline transition-all duration-200 ease-out hover:text-blue-600">
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 px-6 text-xs sm:text-sm md:text-base text-gray-600">{post.date}</td>
                    <td className="py-3 pl-6 text-xs sm:text-sm md:text-base relative">
                      <div className="relative overflow-hidden">
                        <div className="pr-4">{post.summary}</div>
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </main>
  );
} 