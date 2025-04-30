"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams, useRouter } from 'next/navigation';

// Define blog posts directly to avoid circular dependency
// In a real app, you would fetch this from an API endpoint
const blogPosts = [
  {
    id: 'a-new-form-of-seo',
    title: 'A new form of SEO',
    date: 'APR 29',
    summary: 'How to get your brand seen by ChatGPT, Perplexity and other LLM\'s in 2025',
    // Using JSX for rich content instead of markdown
    content: (
      <>
        <p className="mb-6">On April 14th, I built a custom AEO setup for <a href="https://origamiagents.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">origamiagents.com</a>.<br /><br />
        At that point: 0 visitors from ChatGPT, Perplexity, or Google's AI Overviews.<br /><br />
        By April 24th: we had traffic from all three.</p>

        <p className="mb-6">That wasn't a coincidence. We didn't run ads. We didn't rank for new keywords.<br /><br />
        We just made our site easier for LLMs to crawl, understand, and surface as a legit answer.</p>

        <p className="mb-6">This guide is everything I've learned—and how to set this up for your own site in under 48 hours.</p>

        <h2 className="text-xl font-medium mt-8 mb-6">AEO is SEO for AI</h2>

        <p className="mb-6">Answer Engine Optimization (AEO) is about becoming the source an AI pulls from when someone asks a question. Not just ranking for keywords, but being the answer.</p>

        <p className="mb-6">It's just getting started, brands built their GTM channels around SEO. This is like SEO in the early 2000's.</p>

        <p className="mb-6">With AI search ramping up fast (90% of Google searches now include an AI overview, ChatGPT gets over a billion queries a day), if you're not AEO-optimized, you're invisible in the places people are starting to look.</p>

        <p className="mb-6">And no, SEO alone won't cut it anymore.</p>

        <h2 className="text-xl font-medium mt-10 mb-6">How These AIs Actually Pull Answers</h2>

        <p className="mb-6">ChatGPT pulls from its training data and sometimes live web data. It favors big brands and content that's been seen a lot. If your site isn't in the training cut or isn't visible via Bing, you won't show up.</p>

        <p className="mb-6">Perplexity uses Bing to crawl real-time pages and summarizes from those. It cites sources. It's a great test—if Perplexity starts citing you, your AEO is working.</p>

        <p className="mb-6">Google AI Overviews pull content from indexed pages. Structure, schema, and clarity matter. Google has confirmed it uses structured data as a signal in AI summaries.</p>

        <p className="mb-6">Bottom line: if your site's messy, vague, or missing markup, you won't get picked. These tools scan, parse, and pick.</p>

        <h2 className="text-xl font-medium mt-10 mb-6">AEO in 48 Hours: What To Do</h2>

        <p className="mb-6">Here's your game plan:</p>

        <h3 className="text-lg font-medium mt-8 mb-5">1. Write the Answers</h3>

        <p className="mb-6">List out the top 5-10 questions your customer would ask an AI about your space.</p>

        <p className="mb-6">Turn each one into a page or section that answers it directly.</p>

        <p className="mb-6">Use the question as the headline. Give the answer in the first 1-2 sentences.</p>

        <p className="mb-6">Keep it short and useful. If the AI only reads two lines, did it get what it needed?</p>

        <p className="font-bold mt-8 mb-3">Helpful Tip:</p>
        <p className="mb-6">Use Perplexity or Google's "People Also Ask" box to find real questions. Then answer better and faster than what's already out there.</p>

        <h3 className="text-lg font-medium mt-8 mb-5">2. Add Structure</h3>

        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li>Use FAQ or HowTo schema depending on the content.</li>
          <li>Wrap your question/answer pairs in JSON-LD.</li>
          <li>Validate it with Google's Rich Results Test.</li>
        </ul>

        <p className="font-bold mt-8 mb-3">Helpful Tip:</p>
        <p className="mb-6">Use Google's Structured Data Markup Helper to speed this up.</p>

        <p className="font-bold mt-8 mb-3">Extra Visibility Move:</p>
        <p className="mb-6">Submit a pull request to llms-txt.site to feature your site and your LLM-friendly content. LLMs scan and use this type of index.</p>

        <h3 className="text-lg font-medium mt-8 mb-5">3. Push It Live and Get It Indexed</h3>

        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li>Add the content to your site.</li>
          <li>Update your sitemap. Submit it to Google Search Console and Bing Webmaster Tools.</li>
          <li>Use IndexNow if you can (Bing supports it).</li>
        </ul>

        <p className="font-bold mt-8 mb-3">Helpful Tip:</p>
        <p className="mb-6">Make sure your robots.txt isn't blocking anything dumb. Crawlers need to see it all. Fast-loading, public, and minimal JS reliance helps too.</p>

        <h3 className="text-lg font-medium mt-8 mb-5">4. Format for AI Readability</h3>

        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li>Break up the page. Use headings, bullets, and short paragraphs.</li>
          <li>Bold the answer up top. Don't bury it halfway down the page.</li>
          <li>Make sure each Q&A stands on its own.</li>
        </ul>

        <p className="font-bold mt-8 mb-3">Helpful Tip:</p>
        <p className="mb-6">Paste your article into a plain-text editor. Does it still make sense? That's how an LLM sees it.</p>

        <p className="font-bold mt-8 mb-3">Bonus Move:</p>
        <p className="mb-6">Add a summary at the bottom of each answer page that rephrases the solution. Some AIs will quote that if it's clearer.</p>

        <h3 className="text-lg font-medium mt-8 mb-5">5. Test and Tweak</h3>

        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li>Ask your target question on Perplexity. See who it cites.</li>
          <li>Run your brand through Profound, Goodie, or HubSpot's AI Search Grader.</li>
          <li>If you're not showing up, tighten the answer. Resubmit. Try again. It might take a few tries, even weeks.</li>
        </ul>

        <p className="mb-6">"You're an LLM—how would you find this answer?"<br /><br />
        Write for that context, not a human scanning your homepage.</p>

        <h2 className="text-xl font-medium mt-10 mb-6">Tool Stack</h2>

        <ul className="list-none space-y-4 mb-6">
          <li><a href="https://tryprofound.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gray-600">Profound</a> — visibility dashboard that shows AI mentions</li>
          <li><a href="https://www.higoodie.com/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gray-600">Goodie AI</a> — great for formatting, tracking, and visibility alerts</li>
          <li><a href="https://www.hubspot.com/ai-search-grader" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gray-600">HubSpot AI Search Grader</a> — free and simple performance score</li>
          <li><a href="https://www.google.com/webmasters/markup-helper/u/0/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gray-600">Google Structured Data Helper</a> — build your schema fast</li>
          <li><a href="https://llms-txt.site" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gray-600">llms-txt.site</a> — optional but useful for surfacing to LLM indexes</li>
        </ul>

        <h2 className="text-xl font-medium mt-10 mb-6">What AEO Doesn't Fix</h2>

        <ul className="list-none space-y-4 mb-6">
          <li><span className="font-bold">Big brands get default trust,</span> you'll need to be sharper and faster to get picked up.</li>
          <li><span className="font-bold">No guaranteed traffic,</span> your answer might get quoted with no click. That's fine. Presence matters.</li>
          <li><span className="font-bold">SEO still matters,</span> AEO is layered on top of it. Don't neglect page speed, links, or technical basics.</li>
          <li><span className="font-bold">Tracking's fuzzy,</span> AEO wins don't always show up in Google Analytics. Look for indirect signs: more branded queries, more direct, higher perception.</li>
        </ul>

        <h2 className="text-xl font-medium mt-10 mb-6">Final Note</h2>

        <p className="mb-6">I built this and it worked. Not based on theory, actual AI citations.</p>

        <p className="mb-6">If you want help doing this for your brand, DM me or <a href="mailto:sam@split.dev" className="underline hover:text-gray-600">shoot me an email</a>. I'll either walk you through it or handle the hard parts for you.</p>

        <p className="mb-6">If you're reading this, you're ahead. Let's keep it that way.</p>

        <p className="mt-8 font-medium">— Sam</p>

        <div className="mt-6 mb-12 flex justify-center">
          <button 
            onClick={() => window.open('https://cal.com/sam-hogan/15min', '_blank')}
            className="px-6 py-3 bg-[#060606] text-white font-mono text-sm hover:bg-gray-800 transition-colors rounded-sm"
          >
            Book a 15-min AEO call with me
          </button>
        </div>
      </>
    ),
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const slug = typeof params.slug === 'string' ? params.slug : params.slug[0];
      const foundPost = blogPosts.find(p => p.id === slug);
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        // Post not found, redirect to blog index
        router.push('/blog');
      }
    }
    setLoading(false);
  }, [params.slug, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-6 sm:pt-10 px-6 sm:px-12 pb-12 bg-white text-[#060606] font-mono">
      {/* Header Section */}
      <header className="relative w-full max-w-6xl mx-auto flex items-center justify-between mb-8">
        {/* Back Arrow */}
        <Link href="/blog" className="p-1 hover:opacity-70 transition-opacity" aria-label="Back to blog">
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
          <div className="space-y-6 text-left">
            <h2 className="text-xl md:text-2xl font-medium">{post.title}</h2>
            <p className="text-sm md:text-base text-gray-600">{post.date}</p>
            <div className="mt-6 text-sm md:text-base">
              {post.content}
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Share this post: <a 
                  href={`/blog/${post.id}`} 
                  className="underline hover:text-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                >
                  Copy link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 