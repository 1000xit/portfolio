"use client";

import { useState, useEffect } from 'react';
import { FiCheck, FiX, FiCopy } from 'react-icons/fi';

// Animated strike-through component
function AnimatedStrikethrough() {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'striking' | 'replacing' | 'complete'>('idle');
  
  // Split the bad text into segments that will be removed vs kept
  const textSegments = [
    { text: "In today's rapidly evolving digital landscape, ", remove: true },
    { text: "AEO ", remove: false },
    { text: "represents a paradigm shift that goes far beyond traditional page-level SEO optimization strategies. When we think about how ", remove: true },
    { text: "means writing every paragraph so AI assistants can lift it as a complete answer. AI ", remove: false },
    { text: "modern enterprises should approach content creation in this AI-first era, it's crucial to understand that you need to optimize for artificial intelligence by thinking strategically about how sophisticated chatbots, voice assistants, and large language models will methodically parse and analyze your textual content. The reality is that artificial intelligence systems don't process and consume content like traditional human readers do. Instead, they employ advanced algorithms to ", remove: true },
    { text: "scans text, finds the clearest answer to a question, and quotes it. ", remove: false },
    { text: "systematically scan through vast amounts of information to identify and extract the most relevant short chunks of content that can effectively answer specific user queries. This fundamental difference in consumption patterns means that ", remove: true },
    { text: "If your paragraphs are too long or unfocused, AI won't pick them. ", remove: false },
    { text: "all of your content elements including titles, bullet points, and paragraphs must all be strategically formatted and structured to give AI systems easily digestible and sliceable answers. If your headings happen to be vague and non-descriptive, your bullet points unclear and confusing, or your paragraphs excessively long and meandering, AI systems simply won't have the capability to determine what specific content to quote and reference. In essence, your content strategy needs to be fundamentally restructured and ", remove: true },
    { text: "Keep each paragraph under 80 words and focused on a single question.", remove: false }
  ];

  const cleanText = "AEO means writing every paragraph so AI assistants can lift it as a complete answer. AI scans text, finds the clearest answer to a question, and quotes it. If your paragraphs are too long or unfocused, AI won't pick them. Keep each paragraph under 80 words and focused on a single question.";

  // Auto-loop the animation
  useEffect(() => {
    const runAnimation = () => {
      // Phase 1: Strike through bad text (2s)
      setAnimationPhase('striking');
      
      // Phase 2: Replace with clean text (after 2s)
      setTimeout(() => {
        setAnimationPhase('replacing');
      }, 2000);
      
      // Phase 3: Complete and show final state (after 2.5s)
      setTimeout(() => {
        setAnimationPhase('complete');
      }, 2500);
      
      // Reset and restart cycle (after 5s total)
      setTimeout(() => {
        setAnimationPhase('idle');
      }, 5000);
    };

    // Start first animation after component mount
    const initialDelay = setTimeout(runAnimation, 1000);
    
    // Set up repeating animation every 8 seconds
    const interval = setInterval(runAnimation, 8000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const getStatusText = () => {
    switch (animationPhase) {
      case 'striking': return 'Removing fluff...';
      case 'replacing': return 'Cleaned text (47 words):';
      case 'complete': return 'Cleaned text (47 words):';
      default: return 'Original bloated text (187 words)';
    }
  };

  return (
    <div className="border border-gray-200 rounded p-4 sm:p-6 my-6 sm:my-8">
      <div className="mb-3 sm:mb-4">
        <h4 className="font-medium text-sm sm:text-base">Automatic Text Cleanup Demo</h4>
      </div>
      
      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <div className="text-gray-500 text-xs font-mono mb-2">
          {getStatusText()}
        </div>
        
        <div 
          className="text-gray-800 text-sm sm:text-base leading-relaxed relative transition-all duration-500 ease-out"
          style={{
            height: animationPhase === 'replacing' || animationPhase === 'complete' ? 'auto' : 'auto',
            minHeight: animationPhase === 'replacing' || animationPhase === 'complete' ? '60px' : '150px'
          }}
        >
          {/* Original bloated text */}
          {animationPhase !== 'replacing' && animationPhase !== 'complete' && (
            <div 
              className={`transition-all duration-400 ease-out ${
                animationPhase === 'striking' ? 'opacity-100' : 'opacity-100'
              }`}
            >
              {textSegments.map((segment, index) => {
                const delay = index * 80; // Stagger animations every 80ms
                return (
                  <span
                    key={index}
                    className={`inline transition-all duration-250 ease-out ${
                      animationPhase === 'striking' && segment.remove
                        ? 'line-through opacity-30 text-red-600'
                        : ''
                    }`}
                    style={{
                      transitionDelay: animationPhase === 'striking' ? `${delay}ms` : '0ms'
                    }}
                  >
                    {segment.text}
                  </span>
                );
              })}
            </div>
          )}
          
          {/* Clean replacement text */}
          {(animationPhase === 'replacing' || animationPhase === 'complete') && (
            <div 
              className="transition-all duration-400 ease-out"
              style={{
                opacity: animationPhase === 'replacing' || animationPhase === 'complete' ? 1 : 0,
                transform: animationPhase === 'replacing' || animationPhase === 'complete' ? 'translateY(0)' : 'translateY(15px)'
              }}
            >
              {cleanText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple comparison component for other examples
function ExampleComparison({ 
  badExample, 
  goodExample, 
  badTitle = "Before", 
  goodTitle = "After",
  badWordCount,
  goodWordCount,
  insights
}: {
  badExample: string;
  goodExample: string;
  badTitle?: string;
  goodTitle?: string;
  badWordCount?: number;
  goodWordCount?: number;
  insights?: string[];
}) {
  const [activeTab, setActiveTab] = useState<'bad' | 'good'>('bad');

  return (
    <div className="border border-gray-200 rounded p-4 sm:p-6 my-6 sm:my-8">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 mb-4">
        <button
          onClick={() => setActiveTab('bad')}
          className={`px-3 py-2 text-xs sm:text-sm font-mono transition-all ${
            activeTab === 'bad' 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="hidden sm:inline">{badTitle} {badWordCount && `(${badWordCount} words)`}</span>
          <span className="sm:hidden">{badTitle}</span>
        </button>
        <button
          onClick={() => setActiveTab('good')}
          className={`px-3 py-2 text-xs sm:text-sm font-mono transition-all ${
            activeTab === 'good' 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="hidden sm:inline">{goodTitle} {goodWordCount && `(${goodWordCount} words)`}</span>
          <span className="sm:hidden">{goodTitle}</span>
        </button>
      </div>
      
      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <div className={`${activeTab === 'bad' ? 'block' : 'hidden'}`}>
          <div className="text-gray-500 text-xs font-mono mb-2">
            Issues: Too long, multiple ideas, vague opening
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{badExample}</p>
        </div>
        
        <div className={`${activeTab === 'good' ? 'block' : 'hidden'}`}>
          <div className="text-gray-500 text-xs font-mono mb-2">
            Fixed: Concise, direct answer first, single focus
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{goodExample}</p>
        </div>
      </div>
      
      {insights && (
        <div className="border-t border-gray-200 mt-3 sm:mt-4 pt-3">
          <div className="text-gray-600 text-xs font-mono mb-2">
            Key changes:
          </div>
          <ul className="text-gray-600 text-sm space-y-1">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2 flex-shrink-0">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Interactive checklist component
function InteractiveChecklist({ items }: { items: string[] }) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="border border-gray-200 rounded p-4 sm:p-6 my-6">
      <div className="flex items-center mb-4">
        <h4 className="text-base sm:text-lg font-medium text-gray-800">
          Action Items
        </h4>
        <span className="ml-auto text-xs sm:text-sm text-gray-500 font-mono">
          {checkedItems.size}/{items.length}
        </span>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <button
              onClick={() => toggleItem(index)}
              className={`mt-1 w-4 h-4 sm:w-5 sm:h-5 border border-gray-300 flex items-center justify-center transition-all flex-shrink-0 ${
                checkedItems.has(index)
                  ? 'bg-gray-900 border-gray-900 text-white'
                  : 'hover:border-gray-400'
              }`}
            >
              {checkedItems.has(index) && <FiCheck size={10} />}
            </button>
            <p className={`text-sm sm:text-base leading-relaxed transition-all ${
              checkedItems.has(index) ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Copy prompt component
function CopyPromptBox({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="border border-gray-200 rounded my-6 sm:my-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b border-gray-200 space-y-3 sm:space-y-0">
        <h4 className="font-medium text-gray-800 text-sm sm:text-base">AEO Conversion Prompt</h4>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm font-mono hover:bg-gray-800 transition-all"
        >
          <FiCopy size={14} />
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="p-3 sm:p-4 bg-gray-50 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
          {prompt}
        </pre>
      </div>
    </div>
  );
}

export default function ParagraphsOverPages() {
  const aeoPrompt = `You are an AI-powered content engineer tasked with converting an existing blog post into an AEO-optimized article. Your output must follow these strict, technical guidelines:

1. **High-Level Objective**  
   - Transform the input blog post so that each paragraph is a discrete "answer unit" optimized for AI assistants (ChatGPT, Claude, Perplexity, etc.) to quote verbatim.
   - Maintain the original meaning and voice, but restructure content to maximize snippet-pulling and long-tail coverage.

2. **Overall Structure & Output Format**  
   - Return the result as a Markdown document with clearly defined section headings and subheadings.  
   - For each section, include:  
     - A question-style H2 or H3 (e.g., \`## How Does AEO Improve Chatbot Visibility?\`)  
     - One or more "atomic" paragraphs, each < 80 words and focused on a single micro-question or "answerable" idea.  
   - Use ordered lists (\`1. …\`) or bullet lists (\`- …\`) only when listing steps, data points, or examples.  
   - At the very end, append a short "AEO Metadata Summary" that:  
     - Lists each new H2/H3 as a candidate long-tail query.  
     - Maps original paragraph indices (e.g., "Original ¶3") to new paragraph indices (e.g., "New ¶2.1").  
     - Suggests a "meta description" of 155–160 characters that directly answers the primary query of the original post.

3. **Transformation Rules**  
   a. **Paragraph Slicing**  
      - Identify every existing paragraph. For each, determine the core "question" it answers.  
      - If a paragraph exceeds 80 words or covers multiple ideas, split it into two or more shorter paragraphs.  
      - Each resulting paragraph must begin with the main answer, not a fluffy intro or transitional phrase.  
      - Keep each paragraph under 80 words. Use a word counter logic: if it's > 80 words, split at logical breakpoints (comma, conjunction, or secondary idea).  

   b. **Question-Style Subheadings**  
      - For each logical topic in the original, create a question-style heading that matches likely user queries.  
      - Examples:  
        - Original heading: "Benefits of AEO" → New heading: \`## What Benefits Does AEO Provide to Virtual Assistants?\`  
        - Original heading: "Best Practices" → New heading: \`## Which Best Practices Ensure Paragraph-Level Snippet Extraction?\`

   c. **Front-Load Answers & Data**  
      - Every paragraph must start with the direct answer or data point.  
      - If a paragraph needs a statistic, place that statistic in the first sentence. Example:  
        "75% of AI queries pull directly from paragraph leads," instead of "In today's world, 75% of AI queries pull …."  
      - If you cite a case study or example, condense it to a single sentence or bullet point immediately after the question-style heading.

   d. **Atomic Idea Focus**  
      - Each paragraph can only convey one concept or micro-answer. If you see two or more distinct ideas merged, split them.  
      - Avoid transitional phrases like "On the other hand," "Furthermore," or "In today's digital landscape."  
      - Remove any generic intros (e.g., "In today's fast-paced world…"). Replace them with context-free, direct answers.

   e. **Semantic Keyword Integration**  
      - Identify 3–5 seed keywords from the original post (e.g., "AEO," "Answer Engine Optimization," "AI snippet extraction," "LLM traffic").  
      - In each paragraph, incorporate exactly one primary keyword (seed or close variant) within the first 10 words.  
      - Sprinkle secondary keyword variants (synonyms, long-tail forms) no more than once per paragraph, maintaining natural readability.

   f. **Lists & Examples**  
      - If a section originally contained a multi-step process or a list of best practices, convert it into a bullet or ordered list.  
      - Precede every list with a single "Answer sentence" that frames the bullets:  
        "Use these steps to format paragraphs for AEO:"  
        - \`<list item 1>\`  
        - \`<list item 2>\`  
      - Each list item should be < 20 words, directly actionable, and self-contained.

4. **Preserve Voice & Tone**  
   - Keep the author's blunt, no-fluff style: short sentences, direct language, and a slightly conversational edge.  
   - Do not add excessive storytelling or marketing language. Stick to facts, direct claims, and crisp instructions.

5. **AEO Metadata Summary**  
   At the end of your Markdown output, include a section under \`## AEO Metadata Summary\` that contains:  
   - **New Long-Tail Queries:** A bullet list of every question-style heading you generated.  
   - **Paragraph Mapping:** A table or bullet list in this format:  
     - \`Original ¶1 → New ¶1.1, ¶1.2\`  
     - \`Original ¶2 → New ¶2.1\`  
   - **Meta Description (155–160 chars):** Craft one precise meta description answering the primary question of the original post.  

6. **Final Output**  
   - Ensure the output is valid Markdown (headings, bullets, paragraphs).  
   - Do not include any commentary or explanation of your process—only output the transformed AEO-optimized article and the AEO Metadata Summary.`;

  return (
    <article className="max-w-none">
      <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
        AI doesn't read paragraphs the way humans do. It scans for the quickest, clearest answer to quote verbatim. If your paragraphs are long, unfocused, or buried under fluff, AI won't pick them.
      </p>

      <h2 className="text-xl sm:text-2xl font-medium mt-8 sm:mt-10 mb-4 sm:mb-6">Why Paragraphs Beat Pages</h2>

      <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
        AEO means writing every paragraph so AI assistants can lift it as a complete answer. AI scans text, finds the clearest answer to a question, and quotes it. If your paragraphs are too long or unfocused, AI won't pick them.
      </p>

      <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
        Keep each paragraph under 80 words and focused on a single question. Lead with the answer. The first sentence must state the point. Data point? Put it first.
      </p>

      <h2 className="text-xl sm:text-2xl font-medium mt-8 sm:mt-12 mb-4 sm:mb-6">How to Write Atomic Paragraphs</h2>

      <div className="border border-gray-200 rounded p-4 sm:p-6 mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">The 4-Step Process</h3>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <div className="text-gray-600 font-mono text-xs sm:text-sm mb-1">Step 1</div>
            <h4 className="font-medium mb-1 text-sm sm:text-base">Identify the core question</h4>
            <p className="text-xs sm:text-sm text-gray-600">Look at your topic and ask: "What specific question am I answering here?"</p>
          </div>
          
          <div className="border-b border-gray-100 pb-3">
            <div className="text-gray-600 font-mono text-xs sm:text-sm mb-1">Step 2</div>
            <h4 className="font-medium mb-1 text-sm sm:text-base">Headline it like a question</h4>
            <p className="text-xs sm:text-sm text-gray-600">Make your h2/h3 read like exactly what someone would type</p>
          </div>
          
          <div className="border-b border-gray-100 pb-3">
            <div className="text-gray-600 font-mono text-xs sm:text-sm mb-1">Step 3</div>
            <h4 className="font-medium mb-1 text-sm sm:text-base">Answer in the first sentence</h4>
            <p className="text-xs sm:text-sm text-gray-600">No "In today's digital age…" garbage. Start with the answer.</p>
          </div>
          
          <div>
            <div className="text-gray-600 font-mono text-xs sm:text-sm mb-1">Step 4</div>
            <h4 className="font-medium mb-1 text-sm sm:text-base">Keep it tight</h4>
            <p className="text-xs sm:text-sm text-gray-600">If your paragraph runs over 80 words, chop it. Six lines max.</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6">Watch Bad Text Transform Into Good Text</h3>

      <AnimatedStrikethrough />

      <h2 className="text-2xl font-medium mt-12 mb-6">Common Mistakes to Avoid</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-medium mb-2">Marathon Intros</h4>
          <p className="text-gray-600 text-sm mb-2 italic">"In today's fast-changing landscape…"</p>
          <p className="text-sm"><strong>Fix:</strong> If AI doesn't see a direct answer in sentence one, it'll move on.</p>
        </div>

        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-medium mb-2">Keyword Stuffing</h4>
          <p className="text-gray-600 text-sm mb-2 italic">"AI optimization, AI snippet, AI content…"</p>
          <p className="text-sm"><strong>Fix:</strong> One target phrase per paragraph, plus natural variants.</p>
        </div>

        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-medium mb-2">Vague Headlines</h4>
          <p className="text-gray-600 text-sm mb-2 italic">"Advantages" or "Use Cases"</p>
          <p className="text-sm"><strong>Fix:</strong> Write headlines as literal questions people would ask.</p>
        </div>

        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-medium mb-2">Run-On Paragraphs</h4>
          <p className="text-gray-600 text-sm mb-2 italic">More than 80 words means multiple ideas.</p>
          <p className="text-sm"><strong>Fix:</strong> Split it. You want quote-ready units, not essays.</p>
        </div>
      </div>

      <h2 className="text-2xl font-medium mt-12 mb-6">Real Results from Testing</h2>

      <p className="mb-6">
        I compared traditional 2,000-word blog posts with concise, 300-word atomic paragraphs. The shorter, focused content—tracked using <a href="https://www.split.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Split.dev</a> my page crawler detection—received 2–5x more LLM site crawls. This completely overturned my original thesis.
      </p>

      <div className="border border-gray-200 rounded p-4 mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-mono">Long posts (2000+ words)</span>
          <span className="text-sm font-mono">Minimal AI pickup</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-mono">Short paragraphs (&lt;80 words)</span>
          <span className="text-sm font-mono">2x LLM citations</span>
        </div>
      </div>

      <h2 className="text-2xl font-medium mt-12 mb-6">Copy-Paste AEO Conversion Prompt</h2>

      <p className="mb-6">
        I built a prompt that converts any blog post into AEO-optimized content. Copy this into ChatGPT, Claude, or any AI assistant, then paste your existing content below it.
      </p>

      <CopyPromptBox prompt={aeoPrompt} />

      <h2 className="text-xl sm:text-2xl font-medium mt-8 sm:mt-12 mb-4 sm:mb-6">How to Convert Your Existing Content</h2>

      <InteractiveChecklist items={[
        "Scan for long paragraphs. Anything over 80 words? Split it.",
        "Turn vague headings into questions. 'Features' → 'What Features Help AI Find Your Content?'",
        "Move answers to the first sentence. No intro fluff.",
        "Add data up front. '75% of AI queries...' not 'Studies show that 75%...'",
        "Test each paragraph with AI. Paste it and ask: 'Answer this question.' If AI quotes it back, you win."
      ]} />

      <h2 className="text-xl sm:text-2xl font-medium mt-8 sm:mt-12 mb-4 sm:mb-6">Why This Works</h2>

      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        <div className="border border-gray-200 rounded p-3 sm:p-4">
          <h3 className="font-medium mb-2 text-sm sm:text-base">Free Brand Exposure</h3>
          <p className="text-xs sm:text-sm text-gray-600">AI assistants quote your paragraphs verbatim. That's instant brand recognition in AI responses.</p>
        </div>

        <div className="border border-gray-200 rounded p-3 sm:p-4">
          <h3 className="font-medium mb-2 text-sm sm:text-base">Long-Tail Capture</h3>
          <p className="text-xs sm:text-sm text-gray-600">Instead of fighting for broad terms, you capture dozens of micro-queries. Each paragraph becomes its own landing page.</p>
        </div>

        <div className="border border-gray-200 rounded p-3 sm:p-4">
          <h3 className="font-medium mb-2 text-sm sm:text-base">Better User Experience</h3>
          <p className="text-xs sm:text-sm text-gray-600">Visitors get exact answers in the first sentence. They stay longer, reducing bounce rates.</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 sm:pt-8 mt-8 sm:mt-12">
        <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
          Stop writing fluff. If your paragraphs don't give AI the exact answer within the first sentence, they're worthless. Rewrite every paragraph as a standalone answer: under 80 words, one idea, leading with value.
        </p>
        
        <p className="font-medium text-sm sm:text-base">— Sam</p>
      </div>
    </article>
  );
} 