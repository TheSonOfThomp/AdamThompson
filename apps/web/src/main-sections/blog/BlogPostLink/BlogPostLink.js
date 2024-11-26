import React from 'react';
import classnames from 'classnames'
import { format } from 'date-fns'
import styles from './blog-post-link.module.scss';

const BlogPostLink = ({post}) => {
  const { title, url, datePublished, description } = post
  return (
    <a href={url} className={classnames(styles.blog_post, styles.blog_post_link)} key={title}>
      <h2 className={styles.blog_post_title}>{title}</h2>
      <div className={styles.blog_post_date}>{format(new Date(datePublished), 'MMM do yyyy')}</div>
      <p className={styles.blog_post_description}>
        {description}
      </p>
    </a>
  )
};

export default BlogPostLink;
