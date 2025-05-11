import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Event } from '../types/event';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, event }) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call to save email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would send the email and opt-in status to your backend
      console.log('Email submitted:', email, 'Opt-in:', optIn);
      
      // Redirect to the original ticket URL
      window.open(event.ticketUrl, '_blank');
      onClose();
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-2xl font-bold mb-1 text-[#1A2238] pr-6">{event.title}</h3>
          <p className="text-gray-600 mb-6">{event.location}</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Enter your email to continue to tickets
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="mt-1 mr-3"
                />
                <span className="text-sm text-gray-600">
                  I would like to receive updates about events and promotions. You can unsubscribe at any time.
                </span>
              </label>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#ff5252] transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Redirecting...' : 'Continue to Tickets'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;