"use client";

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || submitStatus === 'submitting') return;
    
    setSubmitStatus('submitting');
    
    // Create FormData object
    const formData = new FormData();
    formData.append('email', email);
    
    // Send the email to our API endpoint
    fetch('/api/subscribe', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSubmitStatus('success');
        setEmail('');
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
        // Reset to idle after 3 seconds on error
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    })
    .catch(() => {
      setSubmitStatus('error');
      // Reset to idle after 3 seconds on error
      setTimeout(() => setSubmitStatus('idle'), 3000);
    });
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/50 flex items-center justify-center p-4 z-50 transition-all duration-300 animate-in">
      <div className="bg-white rounded-md p-6 max-w-md w-full relative shadow-lg card-hover">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-all duration-200 ease-out hover-scale btn-press"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>
        
        <h3 className="text-lg font-medium mb-4">Join my newsletter</h3>
        <p className="text-sm text-gray-600 mb-6">Get notified when I publish new insights on AI visibility, AEO strategy, and how to get your brand cited by ChatGPT, Perplexity, and other AI engines.</p>
        
        <form onSubmit={handleSubscribe}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all duration-200 ease-out"
              disabled={submitStatus === 'submitting' || submitStatus === 'success'}
            />
          </div>
          
          <button
            type="submit"
            disabled={submitStatus === 'submitting' || submitStatus === 'success'}
            className={`w-full py-2 px-4 text-sm font-mono rounded-sm transition-all duration-200 ease-out btn-press ${
              submitStatus === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-[#060606] text-white hover:bg-gray-800 hover-scale'
            }`}
          >
            {submitStatus === 'submitting' ? 'Subscribing...' : 
             submitStatus === 'success' ? 'Subscribed!' : 
             submitStatus === 'error' ? 'Try again' : 
             'Subscribe'}
          </button>
          
          {submitStatus === 'error' && (
            <p className="mt-2 text-xs text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
} 