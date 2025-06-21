
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Enable tracking after consent
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Disable tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 p-4 sm:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
            <div className="text-slate-200">
              <p className="text-sm sm:text-base mb-2">
                We use cookies and similar technologies to enhance your experience and analyze website traffic. 
                This helps us improve our quantum security tools.
              </p>
              <Link to="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                View our Privacy Policy
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="flex-1 sm:flex-none text-slate-300 border-slate-600 hover:bg-slate-700"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="flex-1 sm:flex-none bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Accept All
            </Button>
            <button
              onClick={declineCookies}
              className="text-slate-400 hover:text-slate-200 p-1"
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
