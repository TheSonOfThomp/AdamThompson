import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getNotionBlogPosts } from '../../utilities/notion/notion';
import { BlogPost } from '../../types/BlogPost.types';
import { format } from 'date-fns';

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog - Adam Thompson</title>
        <meta name="description" content="Adam Thompson's blog posts and articles" />
        <meta property="og:title" content="Blog - Adam Thompson" />
        <meta property="og:description" content="Adam Thompson's blog posts and articles" />
      </Head>

      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Blog
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            Thoughts on design, development, and technology
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <article 
                key={post.id} 
                style={{ 
                  padding: '1.5rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  backgroundColor: '#fafafa',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Link 
                  href={`/blog/${post.id}`} 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block'
                  }}
                >
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: '#1a1a1a'
                  }}>
                    {post.title || 'Untitled'}
                  </h2>
                  
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#666',
                    marginBottom: '1rem'
                  }}>
                    <time dateTime={post.datePublished}>
                      {format(new Date(post.datePublished), 'MMMM dd, yyyy')}
                    </time>
                    {post.source && (
                      <span style={{ marginLeft: '1rem' }}>
                        • {post.source === 'notion' ? 'Notion' : 'Medium'}
                      </span>
                    )}
                  </div>
                  
                  <p style={{ 
                    color: '#555',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Click to read more →
                  </p>
                </Link>
              </article>
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem',
              color: '#666'
            }}>
              <h3>No blog posts found</h3>
              <p>Check back later for new content!</p>
            </div>
          )}
        </div>

        <footer style={{ 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid #eee',
          textAlign: 'center'
        }}>
          <Link 
            href="/" 
            style={{ 
              color: '#0066cc', 
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← Back to home
          </Link>
        </footer>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionPageId = process.env.NOTION_BLOG_PAGE_ID;
  
  try {
    let posts: BlogPost[] = [];
    
    if (notionPageId) {
      posts = await getNotionBlogPosts(notionPageId);
    }

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => 
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );

    return {
      props: {
        posts: sortedPosts,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default BlogIndex;