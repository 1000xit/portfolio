"use client"; // Required for state and Framer Motion

import { useState, useEffect, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import Initializing from '@/components/Initializing';
import { FiChevronDown, FiMail, FiCalendar } from 'react-icons/fi'; // Added icons
import Script from 'next/script'; // Import Script from Next.js
import Image from 'next/image'; // Import Image from Next.js

// Add type declaration for the Cal object to fix TypeScript errors
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function Home() {
  // Initialize state based on sessionStorage
  const [isInitializing, setIsInitializing] = useState(() => {
    // Check sessionStorage only on client
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasInitialized') !== 'true';
    }
    return true; // Default to initializing on server
  });

  // State for dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Cal.com after component mounts
  useEffect(() => {
    // Only initialize Cal if the window object exists and isn't initializing
    if (typeof window !== 'undefined' && !isInitializing) {
      // Check if Cal script has already been added
      if (window.Cal && !window.Cal.loaded) {
        // Add Cal.com script
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        script.onload = () => {
          // Initialize Cal.com after script loads
          if (window.Cal) {
            window.Cal("init", "15min", {origin: "https://cal.com"});
            window.Cal.ns["15min"]("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
          }
        };
        document.head.appendChild(script);
      } else if (window.Cal) {
        // If Cal object exists, initialize directly
        window.Cal("init", "15min", {origin: "https://cal.com"});
        window.Cal.ns["15min"]("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
      }
    }
  }, [isInitializing]);

  // Effect to handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Effect to handle potential race condition or if initial state was server-side
  useEffect(() => {
    if (sessionStorage.getItem('hasInitialized') === 'true') {
      setIsInitializing(false);
    }
  }, []);

  // Callback function for Initializing component to call on click
  const handleInitComplete = () => {
    setIsInitializing(false);
  };

  // Framer Motion variants for smooth fade transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  // Combined transition for links
  const linkTransition = { duration: 0.3, ease: "easeOut" };

  // Framer Motion variants for the links themselves (scale)
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: linkTransition } // Apply transition here
  };

  // Framer Motion variants for the underline (scaleX)
  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1, transition: linkTransition } // Apply transition here
  };

  // Framer Motion variants for the profile section
  const profileVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.2, 
        ease: "easeOut" 
      } 
    }
  };

  // Pulse animation for the notification badge
  const pulseVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  return (
    // Use AnimatePresence to handle exit animations
    <AnimatePresence mode="wait">
      {isInitializing ? (
        // Initializing Component
        <motion.div
          key="initializing" // Unique key for AnimatePresence
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Initializing onComplete={handleInitComplete} />
        </motion.div>
      ) : (
        // Main Page Content (Blank White Page)
        <motion.div
          key="main-content" // Unique key for AnimatePresence
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex min-h-screen flex-col items-center justify-center bg-white p-4" // Explicit white bg and padding
        >
          {/* Cal.com Script */}
          <Script 
            id="cal-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function (C, A, L) { 
                  let p = function (a, ar) { a.q.push(ar); }; 
                  let d = C.document; 
                  C.Cal = C.Cal || function () { 
                    let cal = C.Cal; 
                    let ar = arguments; 
                    if (!cal.loaded) { 
                      cal.ns = {}; 
                      cal.q = cal.q || []; 
                      d.head.appendChild(d.createElement("script")).src = A; 
                      cal.loaded = true; 
                    } 
                    if (ar[0] === L) { 
                      const api = function () { p(api, arguments); }; 
                      const namespace = ar[1]; 
                      api.q = api.q || []; 
                      if(typeof namespace === "string"){
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                      } else p(cal, ar); 
                      return;
                    } 
                    p(cal, ar); 
                  }; 
                })(window, "https://app.cal.com/embed/embed.js", "init");
                
                Cal("init", "15min", {origin:"https://cal.com"});
                Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
              `
            }}
          />
          {/* Profile Section - Modern Status Style */}
          <motion.div 
            className="flex flex-col items-center mb-10 w-auto"
            variants={profileVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center w-full border-b border-gray-100 pb-5">
              <div className="relative">
                <Image 
                  src="/samh.jpg" 
                  alt="Sam Hogan" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-gray-100"
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
                  <a 
                    href="https://x.com/origamiagents" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-blue-500 hover:underline cursor-pointer"
                  >
                    @origamiagents
                  </a>
                </div>
                
                <p className="font-mono text-xs mt-1 text-gray-600 italic">1 exit, making the internet beautiful.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Link Block */}
          <div className="flex flex-col items-start font-mono text-[#060606]">
            <motion.a 
              href="https://split.dev/" 
              target="_blank" rel="noopener noreferrer" 
              className="text-lg mb-2 relative inline-block"
              variants={linkVariants} // Use link variants
              initial="initial"
              whileHover="hover" // Use hover state name
            >
              <span className="relative inline-block">
                {'>'} improve your AEO
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                  variants={underlineVariants} // Use underline variants
                  initial="initial"
                />
              </span>
            </motion.a>

            <motion.a 
              href="/blog" 
              className="text-lg mb-2 relative inline-block"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="relative inline-block">
                {'>'} my thoughts (blog)
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                  variants={underlineVariants}
                  initial="initial"
                />
              </span>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/sam.hogan/" 
              target="_blank" rel="noopener noreferrer" 
              className="text-lg mb-2 relative inline-block"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="relative inline-block">
                {'>'} instagram
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                  variants={underlineVariants}
                  initial="initial"
                />
              </span>
            </motion.a>

            <motion.a 
              href="https://x.com/imsamhogan" 
              target="_blank" rel="noopener noreferrer" 
              className="text-lg mb-2 relative inline-block"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
               <span className="relative inline-block">
                {'>'} x.com
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                  variants={underlineVariants}
                  initial="initial"
                />
              </span>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/samuelhhogan/" 
              target="_blank" rel="noopener noreferrer" 
              className="text-lg mb-2 relative inline-block"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
               <span className="relative inline-block">
                {'>'} linkedin
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                  variants={underlineVariants}
                  initial="initial"
                />
              </span>
            </motion.a>

            {/* Accordion menu for "work with me" */}
            <div className="mb-2 w-full">
              <motion.button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-lg relative inline-flex items-center w-full"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                <span className="relative inline-block">
                  {'>'} work with me
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#060606] origin-left"
                    variants={underlineVariants}
                    initial="initial"
                  />
                </span>
                {!dropdownOpen && (
                  <motion.span 
                    className="ml-2 px-1.5 py-0.5 text-xs bg-blue-500 text-white rounded-full font-medium"
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                  >
                    +2
                  </motion.span>
                )}
              </motion.button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    className="overflow-hidden pl-5 pt-1"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div 
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="pt-1 pb-1"
                    >
                      <a 
                        href="mailto:sam@split.dev" 
                        className="block py-2 flex items-center text-sm hover:text-gray-800 text-gray-700 font-mono"
                      >
                        <FiMail className="mr-2" size={14} />
                        Send me a message
                      </a>
                      <button 
                        data-cal-link="sam-hogan/15min"
                        data-cal-namespace="15min"
                        data-cal-config='{"layout":"month_view"}'
                        className="block py-2 w-full text-left flex items-center text-sm hover:text-gray-800 text-gray-700 font-mono"
                      >
                        <FiCalendar className="mr-2" size={14} />
                        Book a call
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
