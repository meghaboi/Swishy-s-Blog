
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 text-center text-slate-500 text-sm py-8">
      <p>&copy; {new Date().getFullYear()} Swishy. All rights reserved.</p>
      <p className="mt-2">
        Find me on{' '}
        <a 
          href="#" 
          className="font-medium text-slate-400 hover:text-purple-400 transition-colors"
        >
          X (Twitter)
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
