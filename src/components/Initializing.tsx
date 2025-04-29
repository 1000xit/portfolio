'use client';

import { useState, useEffect, useRef } from 'react';

// New terminal lines based on pnpm dev
const initialLines = [
  '> portfolio@0.1.0 dev /home/sam/create/portfolio',
  '> next dev --turbopack',
  ' ',
  '  ▲ Next.js 15.2.4 (Turbopack)',
  '  - Local:        http://localhost:3000',
  ' ',
  '✓ Starting...',
  '✓ Ready in 1096ms',
  '○ Compiling /_not-found/page ...',
  '✓ Compiled /_not-found/page in 2.7s',
  ' ',
  ' ',
];

const finalLine = 'click anywhere to continue ▍';

// Add onComplete prop
interface InitializingProps {
  onComplete: () => void;
}

export default function Initializing({ onComplete }: InitializingProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFinalLine, setShowFinalLine] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Character typing effect - Faster
  useEffect(() => {
    if (isComplete || currentLineIndex >= initialLines.length) {
        return; 
    }
    const currentLine = initialLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push('');
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, Math.random() * 15 + 20); // Faster: 20-35ms delay per char

      return () => clearTimeout(typingTimeout);
    } else {
      // Move to next line after a shorter pause
      const linePauseTimeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        if (currentLineIndex + 1 >= initialLines.length) {
            setIsComplete(true);
        }
      }, 50); // Faster: Shorter pause between lines

      return () => clearTimeout(linePauseTimeout);
    }
  }, [currentLineIndex, currentCharIndex, isComplete]);

  // Handle completion - Faster
  useEffect(() => {
    if (isComplete) {
      // Shorter delay before starting fade transitions
      const completionTimeout = setTimeout(() => {
        setShowFinalLine(true);
      }, 250); // Faster: Shorter delay before final line appears

      return () => clearTimeout(completionTimeout);
    }
  }, [isComplete]);

  const handleClick = () => {
    if (showFinalLine) {
      sessionStorage.setItem('hasInitialized', 'true'); // Set flag
      onComplete(); // Trigger page transition
    }
  };

  return (
    <div
      ref={containerRef}
      className={`font-mono bg-white text-[#060606] min-h-screen flex flex-col justify-center items-center p-4`}
      onClick={handleClick}
      style={{ cursor: showFinalLine ? 'pointer' : 'default' }}
    >
      <div className="max-w-4xl text-left">
        
        {!showFinalLine && (
          <div
            className={`transition-opacity duration-500 ease-in ${ 
              isComplete ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {displayedLines.map((line, index) => (
              <p key={index} className="h-6"> 
                {line}
              </p>
            ))}
            {/* Blinking placeholder while typing initial lines */}
            {!isComplete && <span className="inline-block w-2 h-4 bg-[#060606] ml-1 animate-pulse"></span>}
          </div>
        )}

        {showFinalLine && (
          <div 
            className={`transition-opacity duration-500 ease-out opacity-100`}
          >
            <p className="h-6">
              {finalLine.slice(0, -1)} 
              <span className="animate-blink">{finalLine.slice(-1)}</span> 
            </p>
          </div>
        )}

      </div>
    </div>
  );
} 