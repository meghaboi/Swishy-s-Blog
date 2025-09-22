
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
        <span className="bg-gradient-to-br from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Swishy
        </span>
      </h1>
      <p className="mt-3 text-lg text-slate-400">
        Thoughts, notes, and other things.
      </p>
    </header>
  );
};

export default Header;
