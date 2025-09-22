import React from 'react';
import type { Post } from '../types';

interface FullscreenPostProps {
  post: Post;
  onClose: () => void;
}

const FullscreenPost: React.FC<FullscreenPostProps> = ({ post, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="fullscreen-post-title"
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
      <div
        className="relative w-full max-w-4xl h-[90vh] max-h-[900px] m-4 rounded-2xl bg-white/5 p-8 md:p-12 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content
      >
        <header className="flex-shrink-0">
          <h2 id="fullscreen-post-title" className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">{post.title}</h2>
          <p className="mt-3 text-base text-slate-400">{post.date}</p>
        </header>
        
        <div className="mt-8 flex-grow overflow-y-auto pr-4 text-slate-300 text-lg leading-relaxed space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex-shrink-0 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600/50 text-white font-semibold rounded-lg border border-purple-500/60 hover:bg-purple-600/80 transition-all duration-200"
            aria-label="Close post"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenPost;
