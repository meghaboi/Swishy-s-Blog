import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import FullscreenPost from './components/FullscreenPost';
import CustomCursor from './components/CustomCursor';
import { posts } from './constants';
import type { Post } from './types';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPost]);

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <CustomCursor />
      <div className="background-container" aria-hidden="true">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="relative z-10 min-h-screen text-slate-200 selection:bg-purple-500 selection:text-white">
        <main className="container mx-auto max-w-3xl px-6 py-12 md:py-20">
          <Header />
          <div className="mt-16 md:mt-20 flex flex-col space-y-12">
            {posts.map((post: Post) => (
              <BlogPost key={post.id} post={post} onSelectPost={handleSelectPost} />
            ))}
          </div>
          <Footer />
        </main>

        {selectedPost && (
          <FullscreenPost post={selectedPost} onClose={handleClosePost} />
        )}
      </div>
    </>
  );
};

export default App;