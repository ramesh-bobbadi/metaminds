import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/Blogs.css';

// Using the images generated earlier
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Cloud Computing in 2026: Serverless Edge and AI Integration",
    excerpt: "As we move further into 2026, the landscape of cloud infrastructure has fundamentally shifted. Serverless architectures at the edge, coupled with deep AI integration, are allowing enterprises to reduce latency to near zero while drastically cutting costs. We explore how big tech is driving this revolution.",
    category: "Cloud",
    image: blog1,
    date: "May 12, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    authorInitials: "ER"
  },
  {
    id: 2,
    title: "Why Claude AI Stayed Out of the Image Generation Race",
    excerpt: "While competitors rushed to multimodal image generation, Anthropic's Claude focused intensely on reasoning, text synthesis, and safety guardrails. In this deep dive, we uncover the strategic and ethical decisions behind focusing on advanced cognitive models rather than visual aesthetics.",
    category: "AI Ethics",
    image: blog2,
    date: "May 15, 2026",
    readTime: "8 min read",
    author: "Marcus Chen",
    authorInitials: "MC"
  },
  {
    id: 3,
    title: "The State of General AI: What's Next After LLMs?",
    excerpt: "Large Language Models have reached an inflection point. But what lies beyond next-word prediction? Researchers are actively exploring neuro-symbolic AI, continuous learning models, and autonomous agent swarms as the true stepping stones toward Artificial General Intelligence.",
    category: "Research",
    image: blog3,
    date: "May 16, 2026",
    readTime: "5 min read",
    author: "Dr. Sarah Lin",
    authorInitials: "SL"
  }
];

function Blogs() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <>
      <Header />
      <main className="blogs-page">
        <div className="blogs-hero">
          <span className="section-badge">Insights & Research</span>
          <h1>Leading the Future of Tech</h1>
          <p>
            Discover our latest thoughts, architectural analyses, and strategic perspectives on Artificial Intelligence, Cloud Computing, and the evolving digital landscape.
          </p>
        </div>

        <div className="blogs-container">
          {/* Featured Post */}
          <article className="featured-post">
            <div className="featured-image-wrapper">
              <span className="blog-category">{featuredPost.category}</span>
              <img src={featuredPost.image} alt={featuredPost.title} className="blog-image" />
            </div>
            <div className="featured-content">
              <div className="blog-meta">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {featuredPost.date}
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="blog-title">{featuredPost.title}</h2>
              <p className="blog-excerpt">{featuredPost.excerpt}</p>
              <div className="blog-footer">
                <div className="author-info">
                  <div className="author-avatar">{featuredPost.authorInitials}</div>
                  <span className="author-name">{featuredPost.author}</span>
                </div>
                <a href={`#blog-${featuredPost.id}`} className="read-more">
                  Read Article 
                  <svg className="read-more-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          </article>

          {/* Secondary Grid */}
          <div className="blogs-grid">
            {secondaryPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <span className="blog-category">{post.category}</span>
                  <img src={post.image} alt={post.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {post.date}
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="author-info">
                      <div className="author-avatar">{post.authorInitials}</div>
                      <span className="author-name">{post.author}</span>
                    </div>
                    <a href={`#blog-${post.id}`} className="read-more">
                      Read Article 
                      <svg className="read-more-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blogs;