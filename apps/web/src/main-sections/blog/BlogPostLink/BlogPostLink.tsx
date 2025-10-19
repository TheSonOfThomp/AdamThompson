import React from 'react';
import classnames from 'classnames'
import { format } from 'date-fns'
import styles from './blog-post-link.module.scss';

const BlogPostLink = ({post}) => {
  const url = post.url || `/blog/${post.id}`;
  return (
    <a href={url} className={classnames(styles.blog_post, styles.blog_post_link)} key={post.title}>
      <h2 className={styles.blog_post_title}>{post.title}</h2>
      <div className={styles.blog_post_date}>{format(new Date(post.datePublished), 'MMM do yyyy')}</div>
    </a>
  )
};

export default BlogPostLink;
