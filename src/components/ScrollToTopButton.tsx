import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3.5 rounded-full bg-[#0B1F3A] text-[#D4AF37] border border-[#D4AF37]/40 shadow-2xl hover:bg-[#132c4f] hover:border-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer group flex items-center justify-center ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform duration-200" />
      <span className="sr-only">Back to top</span>
    </button>
  );
};
