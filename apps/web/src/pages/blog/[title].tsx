import React from 'react';
import Head from 'next/head';
import {  GetStaticProps } from 'next';
import { format } from 'date-fns';
import { getNotionPageBySlug, getAllNotionPageSlugs } from '../../utilities/notion/notion';
import NotionRenderer from '../../components/NotionRenderer/NotionRenderer';
import DefaultPage from '../../templates/default-page/default-template';
import styles from "./blogPost.module.scss"

interface BlogPostPageProps {
  pageData: {
    page: any;
    blocks: any[];
  } | null;
  title: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ pageData, title: titleSlug }) => {
  if (!pageData) {
    return (
      <div>
        <Head>
          <title>Post Not Found | Adam Thompson</title>
        </Head>
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
        </main>
      </div>
    );
  }

  const { page, blocks } = pageData;
  
  // Extract title from page properties
  const title = page.properties?.title?.title?.[0]?.text?.content || 
                page.properties?.Name?.title?.[0]?.text?.content || 
                'Untitled';
  
  // Extract dates
  const createdTime = page.created_time ? new Date(page.created_time) : new Date();

  return (
    <DefaultPage title={`${title} | Adam Thompson`}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <time className={styles.time}>{format(createdTime, 'MMMM dd, yyyy')}</time>
      </header>

      <div className={styles.blogPost_content}>
        <NotionRenderer blocks={blocks} />
      </div>
    </DefaultPage>
  );
};

export async function getStaticPaths() {
  try {
    const pages = await getAllNotionPageSlugs();
    
    const paths = pages
      .filter((page) => page.slug) // Filter out pages without valid slugs
      .map((page) => ({
        params: { title: page.slug },
      }));

    return {
      paths,
      fallback: 'blocking', // Allow for new blog posts to be rendered on-demand
    };
  } catch (error) {
    console.error('Failed to fetch blog post paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const titleSlug = params?.title as string;

  if (!titleSlug) {
    return {
      notFound: true,
    };
  }

  try {
    const pageData = await getNotionPageBySlug(undefined, titleSlug);

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pageData,
        title: titleSlug,
      },
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogPostPage;
