import React from 'react';
import * as moment from 'moment';
import './blog-post-link.scss';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const BlogPostLink = ({post}) => {
  const { title, url, datePublished, description } = post
  return (
    <a href={url} className="blog-post blog-post-link">
      <div className="blog-post-date">{moment(datePublished).format('MMM Do YYYY')}</div>
      <h2 className="blog-post-title">
        {title}
      {/* <FontAwesomeIcon icon={faExternalLinkAlt}/> */}
      </h2>
      <p className="blog-post-description">
        {description}
      </p>
    </a>
  )
};

export default BlogPostLink;
