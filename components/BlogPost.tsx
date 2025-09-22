import React from 'react';
import type { Post } from '../types';

interface BlogPostProps {
  post: Post;
  onSelectPost: (post: Post) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onSelectPost }) => {
  return (
    <div 
      onClick={() => onSelectPost(post)}
      className="cursor-pointer group"
      role="button"
      tabIndex={0}
      aria-label={`Read more about ${post.title}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectPost(post)}
    >
      <article className="rounded-2xl bg-white/5 p-6 md:p-8 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-[1.02]">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">{post.title}</h2>
        <p className="mt-2 text-sm text-slate-400">{post.date}</p>
        <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
          {/* Show a snippet */}
          <p>{post.content[0].substring(0, 150)}...</p>
        </div>
         <p className="mt-4 font-semibold text-purple-400 group-hover:underline">Read more &rarr;</p>
      </article>
    </div>
  );
};

export default BlogPost;