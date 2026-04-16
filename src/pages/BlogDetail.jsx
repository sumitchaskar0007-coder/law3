import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogAPI } from '../api';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  WhatsappShareButton,
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  WhatsappIcon 
} from 'react-share';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await blogAPI.getById(id);
        setBlog(res.data);
        document.title = res.data.metaTitle || res.data.title;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', res.data.metaDescription || res.data.excerpt);
        }
      } catch (err) {
        console.error('Failed to fetch blog', err);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [id, navigate]);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      
      setReadingProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate reading time
  const getReadingTime = (content) => {
    if (!content) return '1 min read';
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Process content with drop cap and other enhancements
  const processContent = (html) => {
    if (!html) return '';
    
    // Add drop cap to first paragraph
    const firstParaRegex = /<p>([^<]*)/;
    const match = html.match(firstParaRegex);
    
    if (match) {
      const firstParaContent = match[1];
      const firstChar = firstParaContent.charAt(0);
      const restOfText = firstParaContent.slice(1);
      
      const dropCapHtml = `<p><span class="drop-cap">${firstChar}</span>${restOfText}`;
      html = html.replace(firstParaRegex, dropCapHtml);
    }
    
    return html;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const readingTime = getReadingTime(blog.content);

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-200"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Sticky Header with Share Buttons */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/blog" className="text-gray-600 hover:text-gray-900">
            ← Back to Blogs
          </Link>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 hidden sm:inline">{readingTime}</span>
            <div className="flex space-x-1">
              <WhatsappShareButton url={shareUrl} title={blog.title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={blog.title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content - Medium Style */}
      <article className="bg-white">
        {/* Hero Section with Centered, Smaller Width Image */}
        {blog.coverImage && (
          <div className="relative w-full flex justify-center bg-gray-100">
            <div className="relative w-full max-w-4xl h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
              <img
                src={`https://api.jadhavarcollegeoflaw.com${blog.coverImage}`}
                alt={blog.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-serif">
            {blog.title}
          </h1>

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 pb-8 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {blog.author?.charAt(0) || 'A'}
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author || 'Admin'}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content with Medium Styling */}
          <div 
            ref={contentRef}
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
          />
        </div>
      </article>

      {/* Custom CSS for Medium-like styling */}
      <style jsx="true">{`
        .blog-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.7;
          color: #222;
        }

        /* Drop Cap */
        .drop-cap {
          float: left;
          font-size: 72px;
          line-height: 1;
          font-weight: 700;
          margin-right: 12px;
          margin-top: 4px;
          color: #2563eb;
          font-family: 'Georgia', serif;
        }

        /* Headings */
        .blog-content h1 {
          font-size: 42px;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Georgia', 'Playfair Display', serif;
        }

        .blog-content h2 {
          font-size: 30px;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Georgia', 'Playfair Display', serif;
        }

        .blog-content h3 {
          font-size: 24px;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        /* Paragraphs */
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        /* Blockquotes */
        .blog-content blockquote {
          border-left: 4px solid #2563eb;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          font-size: 1.2rem;
          color: #4b5563;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 8px;
        }

        /* Lists */
        .blog-content ul, 
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
        }

        /* Images */
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 2rem auto;
          display: block;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Highlight Box */
        .blog-content .highlight-box {
          background: #fef3c7;
          padding: 1.5rem;
          border-radius: 12px;
          margin: 2rem 0;
          border-left: 4px solid #f59e0b;
        }

        /* Code blocks */
        .blog-content pre {
          background: #1e293b;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        /* Horizontal Rule */
        .blog-content hr {
          margin: 2rem 0;
          border: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #ccc, transparent);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .blog-content {
            font-size: 18px;
          }
          
          .blog-content h1 {
            font-size: 32px;
          }
          
          .blog-content h2 {
            font-size: 24px;
          }
          
          .drop-cap {
            font-size: 56px;
            margin-right: 8px;
          }
        }
      `}</style>
    </>
  );
}