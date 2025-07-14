"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiArrowLeft, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { lazy, Suspense, useState, useEffect } from 'react';
import NewsletterModal from '@/components/NewsletterModal';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [showModal, setShowModal] = useState(false);

  // Show newsletter modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  // Post metadata
  const getPostMetadata = () => {
    if (slug === 'profound-10m-search-study') {
      return {
        title: "Profound's 10M Search Study: What Actually Works for AI Citations",
        date: 'MAY 23, 2025'
      };
    } else if (slug === 'a-new-form-of-seo') {
      return {
        title: 'A New Form of SEO',
        date: 'APR 29, 2025'
      };
    } else if (slug === 'seo-is-about-ranking-aeo-is-about-being-the-answer') {
      return {
        title: 'SEO is About Ranking. AEO is About Being the Answer.',
        date: 'MAY 09, 2025'
      };
    } else if (slug === 'paragraphs-over-pages') {
      return {
        title: 'Paragraphs > Pages',
        date: 'JUN 6, 2025'
      };
    } else if (slug === 'how-to-fix-your-website-for-ai-search-aeo') {
      return {
        title: 'How to fix your website for AI search (AEO)',
        date: 'JUL 14, 2025'
      };
    } else {
      return {
        title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Blog Post',
        date: 'May 2025'
      };
    }
  };

  const { title, date } = getPostMetadata();
  
  // Use lazy loading for the MDX content
  let BlogContent;
  
  try {
    // This will load content based on the actual slug
    if (slug === 'profound-10m-search-study') {
      BlogContent = lazy(() => import('../profound-10m-search-study'));
    } else if (slug === 'a-new-form-of-seo') {
      BlogContent = lazy(() => import('../a-new-form-of-seo'));
    } else if (slug === 'seo-is-about-ranking-aeo-is-about-being-the-answer') {
      BlogContent = lazy(() => import('../seo-is-about-ranking-aeo-is-about-being-the-answer'));
    } else if (slug === 'paragraphs-over-pages') {
      BlogContent = lazy(() => import('../paragraphs-over-pages'));
    } else if (slug === 'how-to-fix-your-website-for-ai-search-aeo') {
      BlogContent = lazy(() => import('../how-to-fix-your-website-for-ai-search-aeo'));
    }
  } catch (error) {
    console.error(`Error loading blog content for ${slug}:`, error);
  }
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-6 sm:pt-10 px-6 sm:px-12 pb-12 bg-white text-[#060606] font-mono animate-in">
      {/* Header Section - Improved responsive layout */}
      <header className="relative w-full max-w-6xl mx-auto flex items-center justify-between mb-8 px-1 text-appear">
        {/* Back Arrow */}
        <Link href="/blog" className="p-1 hover:opacity-70 transition-all duration-200 ease-out hover-scale btn-press z-10" aria-label="Back to blog">
          <FiArrowLeft size={20} />
        </Link>
        
        {/* Centered Title - Fixed positioning for smaller screens */}
        <h1 className="text-sm sm:text-md font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          MY THOUGHTS
        </h1>

        {/* Newsletter Button - Different text for mobile */}
        <button 
          onClick={() => setShowModal(true)}
          className="text-xs sm:text-sm font-mono py-1 px-2 border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 ease-out hover-scale btn-press z-10"
        >
          <span className="hidden sm:inline">Join newsletter</span>
          <span className="sm:hidden">Subscribe</span>
        </button>
      </header>

      {/* Content Area */}
      <div className="w-full max-w-6xl flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="space-y-6 text-left">
            {/* Article Header */}
            <div className="mb-10 text-appear">
              <h1 className="text-2xl md:text-3xl font-medium mb-2">{title}</h1>
              <p className="text-sm text-gray-600">{date}</p>
            </div>
            
            <Suspense fallback={<div className="pulse-soft">Loading content...</div>}>
              {BlogContent ? (
                <BlogContent />
              ) : (
                <p>Could not find blog post: {slug}</p>
              )}
            </Suspense>
            
            {/* Author section - styled like home page */}
            <div className="mt-12 mb-8 pt-6 border-t border-gray-100 text-appear">
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src="/samh.jpg" 
                    alt="Sam Hogan" 
                    className="w-12 h-12 rounded-full object-cover border border-gray-100 transition-transform duration-200 ease-out hover-scale"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-[1.5px] border-white"></div>
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-baseline">
                    <p className="font-mono font-medium text-base">Sam Hogan</p>
                    <div className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-gray-100 text-gray-600">online</div>
                  </div>
                  
                  <div className="flex items-center mt-1 text-gray-500">
                    <p className="font-mono text-xs">design/gtm engineer</p>
                    <span className="mx-1.5 text-gray-300">•</span>
                    <div className="flex space-x-2">
                      <a 
                        href="https://www.linkedin.com/in/samuelhhogan/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out hover-scale"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={16} />
                      </a>
                      <a 
                        href="https://x.com/imsamhogan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-400 transition-all duration-200 ease-out hover-scale"
                        aria-label="Twitter"
                      >
                        <FiTwitter size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="font-mono text-xs mt-1 text-gray-600 italic">1 exit, making the internet beautiful.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-appear">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                  className="text-xs font-mono py-1 px-3 border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 ease-out hover-scale btn-press text-center"
                >
                  Share
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="text-xs font-mono py-1 px-3 border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200 ease-out hover-scale btn-press text-center"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </main>
  );
} 