import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { format } from 'date-fns';
import { getNotionPageBySlug, getAllNotionPageSlugs } from '../../utilities/notion/notionClient';
import NotionRenderer from '../../components/NotionRenderer/NotionRenderer';
import DefaultPage from '../../templates/default-page/default-template';
import { BackLink } from '../../components/BackLink/BackLink';
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pages = await getAllNotionPageSlugs();
    const paths = pages.map((page) => ({
      params: { title: page.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // This allows for new posts to be added without rebuilding
    };
  } catch (error) {
    console.error('Error getting static paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const titleSlug = params?.title as string;

  if (!titleSlug) {
    return {
      notFound: true,
    };
  }

  try {
    const pageData = await getNotionPageBySlug(titleSlug);

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
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogPostPage;
