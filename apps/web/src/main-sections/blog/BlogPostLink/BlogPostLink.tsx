import React from 'react';
import classnames from 'classnames'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './blog-post-link.module.scss';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

const BlogPostLink = ({post}) => {
  const url = post.url || `/blog/${post.slug || post.id}`
  const externalSource = getExternalSource(url);

  return (
    <a href={url} className={classnames(styles.blog_post, styles.blog_post_link)} key={post.title}>
      <h2 className={styles.blog_post_title}>
        {post.title}
      </h2>
      {externalSource && externalSource.includes('medium') && (
        <div className={styles.blog_post_icon}>
          <FontAwesomeIcon icon={faMedium} size="sm" />
        </div>
      )}
      <div className={styles.blog_post_date}>{format(new Date(post.datePublished), 'MMM do yyyy')}</div>
    </a>
  )
};

export default BlogPostLink;

const getExternalSource = (url) => {
  try{
    return new URL(url).hostname
  } catch (error) {
    return ''
  }
}