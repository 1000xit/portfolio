export default function HowToFixYourWebsiteForAiSearchAeo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">8 Quick Wins to Make Your Website AI-Ready (AEO Edition)</h1>
      <p className="mb-6">If you want your site to show up in ChatGPT, Perplexity, or Google's AI results, you need more than old-school SEO. Here's what you actually need to do, explained in plain English—no technical background required.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">1. Pick the Right Framework (Don't Build on Sand)</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What's a framework?</strong></p>
        <p className="mb-4">A framework is basically the foundation and toolkit your website runs on.</p>
        <p className="mb-2"><strong>Why it matters:</strong></p>
        <p className="mb-4">AI search engines (like ChatGPT and Perplexity) need to read your site like a book, not just look at the cover. Some frameworks let you write the whole story, others only let you decorate the cover.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
          <p className="mb-2"><strong>⚠️ Limited Options</strong></p>
          <p className="text-sm font-semibold mb-2">Webflow, Framer, Squarespace, Wix</p>
          <ul className="list-disc pl-6 text-sm space-y-1 mb-3">
            <li>✅ Easy drag-and-drop setup</li>
            <li>✅ Beautiful templates</li>
            <li>✅ Fast to launch</li>
            <li>❌ Limited schema control</li>
            <li>❌ Can't customize loading</li>
            <li>❌ SEO ceiling exists</li>
          </ul>
          <p className="text-xs text-gray-600">Good for: Quick launches, portfolios, simple sites</p>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-md">
          <p className="mb-2"><strong>🚀 Full Control Options</strong></p>
          <p className="text-sm font-semibold mb-2">Next.js, Gatsby, Custom Development</p>
          <ul className="list-disc pl-6 text-sm space-y-1 mb-3">
            <li>✅ Complete schema control</li>
            <li>✅ Custom loading strategies</li>
            <li>✅ Advanced SEO features</li>
            <li>✅ AI-friendly structure</li>
            <li>❌ Requires developer</li>
            <li>❌ More complex setup</li>
          </ul>
          <p className="text-xs text-gray-600">Good for: Long-term growth, serious businesses</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>🎯 Decision Framework</strong></p>
        <div className="text-sm">
          <p className="mb-2"><strong>Choose builders (Webflow/Framer) if:</strong></p>
          <ul className="list-disc pl-6 mb-4">
            <li>You need to launch quickly (under 2 weeks)</li>
            <li>Budget is tight</li>
            <li>Site is simple (under 20 pages)</li>
          </ul>
          <p className="mb-2"><strong>Choose custom framework (Next.js) if:</strong></p>
          <ul className="list-disc pl-6">
            <li>Long-term business investment</li>
            <li>Want to rank competitively</li>
            <li>Planning to add features</li>
            <li>Have developer access</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">2. Add Structured Data (Schema) So Bots Understand Your Content</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What is schema?</strong></p>
        <p className="mb-4">Schema is a special code ("structured data") you add to your pages to tell search engines exactly what's on the page: who you are, what you sell, reviews, FAQs, product details, etc.</p>
        <p className="mb-2"><strong>Why it matters:</strong></p>
        <p className="mb-4">Google, ChatGPT, and others use schema to "see" your business. No schema = you're invisible or misunderstood.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <p className="mb-2"><strong>📋 Example: Local Business Schema</strong></p>
        <p className="mb-4 text-sm">Copy this template and customize for your business:</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto mb-4">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Happy Teeth Dental",
  "description": "Family dental practice in downtown",
  "url": "https://happyteeth.com",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  },
  "openingHours": "Mo-Fr 9:00-17:00"
}
</script>`}
        </pre>
      </div>

      <div className="bg-green-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>🛠️ What to do:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use <a href="https://schema.org" className="text-blue-600 underline" target="_blank">Schema.org</a> to find your business type</li>
          <li>Try <a href="https://technicalseo.com/tools/schema-markup-generator/" className="text-blue-600 underline" target="_blank">schema generators</a> for quick setup</li>
          <li>Add JSON-LD to your &lt;head&gt; section</li>
          <li>Test with <a href="https://search.google.com/test/rich-results" className="text-blue-600 underline" target="_blank">Google's Rich Results Test</a></li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">3. Meta Tags & Open Graph: The First Impression</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What are meta tags?</strong></p>
        <p className="mb-4">Meta tags are hidden notes in your website code that describe each page—like a headline and summary.</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Title tag:</strong> The name of the page (shows up in Google search results)</li>
          <li><strong>Meta description:</strong> A short summary (shows under your title in Google)</li>
          <li><strong>Open Graph/Twitter tags:</strong> Make your site look good when people share it on social media</li>
        </ul>
        <p className="mb-2"><strong>Why it matters:</strong></p>
        <p className="mb-4">Search engines and AI use this info to decide what your page is about—and how to display it. No tags or bad tags? You're either ignored, or your info looks messy.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <p className="mb-2"><strong>📝 Copy-Paste Meta Tags Template</strong></p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto mb-4">
{`<!-- Basic Meta Tags -->
<title>Your Page Title | Your Brand Name</title>
<meta name="description" content="Compelling 150-160 character description that makes people want to click">
<meta name="keywords" content="primary keyword, secondary keyword, related terms">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Same description as above">
<meta property="og:image" content="https://yoursite.com/social-image.jpg">
<meta property="og:url" content="https://yoursite.com/current-page">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Page Title">
<meta name="twitter:description" content="Same description as above">
<meta name="twitter:image" content="https://yoursite.com/social-image.jpg">`}
        </pre>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>🔍 Quick Check Method</strong></p>
        <div className="bg-white p-3 rounded border mb-3">
          <p className="mb-2 text-sm font-mono">Right-click your page → "View Page Source" → Ctrl/Cmd+F and search for:</p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><code className="bg-gray-200 px-1 rounded">&lt;title&gt;</code></li>
            <li><code className="bg-gray-200 px-1 rounded">meta name="description"</code></li>
            <li><code className="bg-gray-200 px-1 rounded">property="og:title"</code></li>
          </ul>
        </div>
        <p className="text-sm"><strong>Pro tip:</strong> Use <a href="https://www.opengraph.xyz/" className="text-blue-600 underline" target="_blank">OpenGraph.xyz</a> to preview how your page looks when shared.</p>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">4. Keep a Clean Sitemap and Robots.txt (Navigation for Bots)</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What is a sitemap?</strong></p>
        <p className="mb-4">A sitemap is a file that lists all the pages on your site you want search engines to find.</p>
        <p className="mb-2"><strong>What is robots.txt?</strong></p>
        <p className="mb-4">A file that tells search engines which pages not to look at (like admin or test pages).</p>
        <p className="mb-2"><strong>Why it matters:</strong></p>
        <p className="mb-4">Without these, search engines may miss important pages—or waste time on stuff you don't want seen.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><strong>🗺️ Sample robots.txt</strong></p>
          <p className="mb-2 text-xs">Place this at yoursite.com/robots.txt:</p>
          <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`User-agent: *
Allow: /

# Block admin areas
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /login/
Disallow: /private/

# Allow important files
Allow: /sitemap.xml
Allow: /*.css
Allow: /*.js

Sitemap: https://yoursite.com/sitemap.xml`}
          </pre>
        </div>

        <div className="bg-green-50 p-4 rounded-md">
          <p className="mb-2"><strong>📋 Sitemap Checklist</strong></p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>✅ Include all important pages</li>
            <li>✅ Update automatically when you add pages</li>
            <li>✅ Submit to Google Search Console</li>
            <li>✅ Keep under 50MB / 50,000 URLs</li>
            <li>❌ Don't include blocked pages</li>
            <li>❌ Don't include redirect URLs</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>🔧 Quick Setup Tools</strong></p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">For any website:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><a href="https://xml-sitemaps.com" className="text-blue-600 underline" target="_blank">xml-sitemaps.com</a> - Free sitemap generator</li>
              <li><a href="https://www.xml-sitemaps.com/robots-txt-generator.html" className="text-blue-600 underline" target="_blank">Robots.txt generator</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">For developers:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Next.js: <code className="bg-gray-200 px-1 rounded">next-sitemap</code></li>
              <li>WordPress: Yoast SEO plugin</li>
              <li>Check: <code className="bg-gray-200 px-1 rounded">yoursite.com/robots.txt</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">5. Check If Your Site Is Crawlable</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What does "crawlable" mean?</strong></p>
        <p className="mb-4">Crawling is how search engines and AI read your site. If something blocks them (a login, a script, or a missing link), they'll skip you.</p>
      </div>

      <div className="bg-green-50 p-4 rounded-md mb-4">
        <p className="mb-3"><strong>🕷️ Google Search Console Setup (Free)</strong></p>
        <ol className="list-decimal pl-6 text-sm space-y-2">
          <li>Go to <a href="https://search.google.com/search-console" className="text-blue-600 underline" target="_blank">search.google.com/search-console</a></li>
          <li>Add your website property</li>
          <li>Verify ownership (HTML file or DNS record)</li>
          <li>Submit your sitemap</li>
          <li>Check for crawl errors weekly</li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><strong>🚫 Common Crawl Blockers</strong></p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Broken internal links</li>
            <li>Noindex tags on important pages</li>
            <li>Server errors (500, 503)</li>
            <li>Robots.txt blocking too much</li>
            <li>Slow page load times</li>
            <li>Missing navigation links</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-md">
          <p className="mb-2"><strong>✅ Quick Fixes</strong></p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Test all your main page links</li>
            <li>Remove "noindex" from public pages</li>
            <li>Fix 404 errors promptly</li>
            <li>Add breadcrumb navigation</li>
            <li>Create an HTML sitemap</li>
            <li>Internal linking between pages</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>🔍 Manual Crawl Test</strong></p>
        <div className="bg-white p-3 rounded border text-sm">
          <p className="mb-2">Try this simple test:</p>
          <ol className="list-decimal pl-4 space-y-1">
            <li>Open your homepage in "incognito/private" mode</li>
            <li>Can you navigate to all your important pages using only links?</li>
            <li>No broken images or "page not found" errors?</li>
            <li>Pages load in under 5 seconds?</li>
          </ol>
          <p className="mt-2 text-xs text-gray-600">If you can't easily navigate your site, neither can bots.</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">6. Test Your Site's AI Search Presence</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>What does this mean?</strong></p>
        <p className="mb-4">See if you show up in AI search engines when people ask about your business, industry, or services.</p>
        <p className="mb-2"><strong>Why it matters:</strong></p>
        <p className="mb-4">If you don't show up, you're missing traffic and credibility. Time to fix your fundamentals.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <p className="mb-3"><strong>🤖 Copy These Queries to Test Your Visibility</strong></p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold mb-2">Test on ChatGPT:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-2 rounded border font-mono">"What is [Your Company Name]?"</div>
              <div className="bg-white p-2 rounded border font-mono">"Who is [Your Name]?"</div>
              <div className="bg-white p-2 rounded border font-mono">"Best [your service] companies"</div>
              <div className="bg-white p-2 rounded border font-mono">"[Your industry] experts to follow"</div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Test on Perplexity:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-2 rounded border font-mono">"[Your Company] reviews"</div>
              <div className="bg-white p-2 rounded border font-mono">"How to [problem you solve]"</div>
              <div className="bg-white p-2 rounded border font-mono">"Top [your niche] in [your city]"</div>
              <div className="bg-white p-2 rounded border font-mono">"[Your main keyword] guide"</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-2"><strong>📊 What to Look For</strong></p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-green-600 mb-2">✅ Good signs:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Your site is mentioned</li>
              <li>Accurate information</li>
              <li>Direct links to your pages</li>
              <li>Recent content referenced</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-yellow-600 mb-2">⚠️ Warning signs:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Outdated information</li>
              <li>Only social media links</li>
              <li>Competitors mentioned instead</li>
              <li>Generic industry info</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-600 mb-2">❌ Red flags:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>No mention at all</li>
              <li>Wrong information</li>
              <li>"I don't have info about..."</li>
              <li>Only mentions competitors</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">7. Speed Up Your Site and Use Clean Code</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>Why speed matters:</strong></p>
        <p className="mb-4">Fast sites get crawled (and ranked) more often. Slow or messy sites get skipped by both humans and AI.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="mb-3"><strong>⚡ Speed Test Tools (Copy these URLs)</strong></p>
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border">
            <strong>PageSpeed Insights:</strong> 
            <code className="ml-2 text-blue-600">https://pagespeed.web.dev/</code>
          </div>
          <div className="bg-white p-2 rounded border">
            <strong>GTmetrix:</strong> 
            <code className="ml-2 text-blue-600">https://gtmetrix.com/</code>
          </div>
          <div className="bg-white p-2 rounded border">
            <strong>Pingdom:</strong> 
            <code className="ml-2 text-blue-600">https://tools.pingdom.com/</code>
          </div>
        </div>
        <p className="text-xs mt-3 text-gray-600">Target: Load time under 3 seconds, Core Web Vitals in green</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-md">
          <p className="mb-2"><strong>🚀 Quick Wins</strong></p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Compress images (use WebP format)</li>
            <li>Enable GZIP compression</li>
            <li>Use a Content Delivery Network (CDN)</li>
            <li>Minimize plugins/widgets</li>
            <li>Clean up unused CSS/JavaScript</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><strong>🎯 Target Metrics</strong></p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><strong>LCP:</strong> Under 2.5 seconds</li>
            <li><strong>FID:</strong> Under 100ms</li>
            <li><strong>CLS:</strong> Under 0.1</li>
            <li><strong>Mobile score:</strong> 90+</li>
            <li><strong>Desktop score:</strong> 95+</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">8. Keep an Eye on Things and Iterate</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
        <p className="mb-2"><strong>Why monitor?</strong></p>
        <p className="mb-4">SEO and AEO aren't set-and-forget. As AI search evolves, so do best practices.</p>
      </div>

      <div className="bg-green-50 p-4 rounded-md mb-6">
        <p className="mb-3"><strong>📊 Monthly Monitoring Checklist</strong></p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">📈 Analytics to Track:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Organic traffic growth</li>
              <li>AI search mentions</li>
              <li>New keyword rankings</li>
              <li>Page crawl errors</li>
              <li>Site speed scores</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">🔧 Tools to Use:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><a href="https://search.google.com/search-console" className="text-blue-600 underline" target="_blank">Google Search Console</a> (free)</li>
              <li><a href="https://analytics.google.com" className="text-blue-600 underline" target="_blank">Google Analytics</a> (free)</li>
              <li><a href="https://split.dev" className="text-blue-600 underline" target="_blank">Split.dev</a> for AEO tracking</li>
              <li>AI search engines (manual checks)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">🎯 Bottom Line</h3>
        <p className="mb-4 text-lg">Even if you're not technical, these 8 steps will help you get found in the new era of AI search.</p>
        <div className="bg-white/10 p-4 rounded-md">
          <p className="mb-2 font-semibold">Start with these 3 priorities:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Test your AI visibility</strong> (Section 6) - See where you stand</li>
            <li><strong>Add basic schema</strong> (Section 2) - Make bots understand you</li>
            <li><strong>Fix meta tags</strong> (Section 3) - Control your first impression</li>
          </ol>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-300 p-4 rounded-md text-center">
        <p className="mb-3 font-semibold">💡 Want a step-by-step guide or website template optimized for AI search?</p>
        <p className="text-sm text-gray-600">DM me or comment "AEO" for a free download with checklists, code snippets, and implementation guides.</p>
      </div>
    </div>
  );
} 