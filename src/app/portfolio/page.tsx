"use client"; // Required for Framer Motion

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiMenu, FiX } from 'react-icons/fi'; // Icons
import type { Metadata } from "next";

const categories = ['Landing Pages', 'UI/UX', 'Branding'];

// Define project data
const landingPageProjects = [
  {
    title: 'ORIGAMIAGENTS.COM',
    url: 'https://origamiagents.com',
  },
  {
    title: 'USEREPPED.COM (REPPED)',
    url: 'https://userepped.com',
  },
  {
    title: 'COMING SOON...',
    url: 'about:blank',
    tooltip: "I'm either too busy or too lazy to update this. Stay tuned :)"
  }
];

export const metadata: Metadata = {
  title: "Sam | Portfolio",
  description: "Collection of my work and projects",
  openGraph: {
    title: "Sam's Portfolio",
    description: "Check out my work and projects",
    images: ['/splitfavicon.svg'],
  },
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for active project within a category
  const [activeProject, setActiveProject] = useState(landingPageProjects[0]);

  // Update active project when category changes (resetting to first if applicable)
  useEffect(() => {
    if (selectedCategory === 'Landing Pages') {
      setActiveProject(landingPageProjects[0]);
    } 
    // Add logic for other categories if they have sub-projects
    // else { setActiveProject(null); } 
  }, [selectedCategory]);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15, ease: 'easeIn' } }
  };

  // Content animation variants
  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-6 sm:pt-10 px-6 sm:px-12 pb-12 bg-white text-[#060606] font-mono">
      {/* Header Section */}
      <header className="relative w-full max-w-6xl mx-auto flex items-center justify-between mb-4 sm:mb-8">
        {/* Back Arrow */}
        <Link href="/" className="p-1 hover:opacity-70 transition-opacity" aria-label="Back to home">
          <FiArrowLeft size={20} />
        </Link>
        
        {/* Centered Title */}
        <h1 className="text-sm sm:text-md font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          PORTFOLIO
        </h1>

        {/* Empty div for symmetry */}
        <div className="w-5"></div>
      </header>

      {/* Content Area */}
      <div className="w-full max-w-6xl flex-grow flex flex-col items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory} // Animate when category changes
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex-grow flex flex-col" // Added flex-col
          >
            {selectedCategory === 'Landing Pages' && (
              <>
                {/* Project Title */}
                <h2 className="text-sm font-medium uppercase tracking-widest mb-4 self-start">
                  {activeProject.title}
                </h2>
                {/* Project Navigation */}
                <div className="flex gap-3 mb-4 self-start">
                  {landingPageProjects.map((project) => (
                    <div key={project.title} className="relative group">
                      <button
                        onClick={() => setActiveProject(project)}
                        className={`text-xs px-2 py-0.5 rounded
                          ${
                            activeProject.title === project.title
                              ? 'bg-slate-200 text-black'
                              : 'text-slate-400 hover:text-slate-600'
                          }
                        `}
                      >
                        {project.title.split('.')[0]}
                      </button>
                      {project.tooltip && (
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap pointer-events-none z-10 w-56 text-center">
                          {project.tooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* iframe Container */}
                <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-slate-300 shadow-lg bg-slate-100 flex-grow">
                  <iframe
                    key={activeProject.url}
                    src={activeProject.url}
                    title={activeProject.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </>
            )}
            {selectedCategory === 'UI/UX' && (
              <div className="text-left p-4 w-full">
                <h2 className="text-sm font-medium uppercase tracking-widest mb-4">UI/UX</h2>
                <p>(UI/UX Content Placeholder)</p>
              </div>
            )}
            {selectedCategory === 'Branding' && (
              <div className="text-left p-4 w-full">
                <h2 className="text-sm font-medium uppercase tracking-widest mb-4">Branding</h2>
                <p>(Branding Content Placeholder)</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
} 