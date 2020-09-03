import React from 'react';
import { format } from 'date-fns'
import './blog-post-link.scss';

const BlogPostLink = ({post}) => {
  const { title, url, datePublished, description } = post
  return (
    <a href={url} className="blog-post blog-post-link">
      <h2 className="blog-post-title">{title}</h2>
      <div className="blog-post-date">{format(new Date(datePublished), 'MMM do yyyy')}</div>
      <p className="blog-post-description">
        {description}
      </p>
    </a>
  )
};

export default BlogPostLink;
