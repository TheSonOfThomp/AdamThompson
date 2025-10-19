import React from 'react';

interface RichText {
  type: string;
  text?: {
    content: string;
    link?: {
      url: string;
    };
  };
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  };
  href?: string;
}

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface NotionRendererProps {
  blocks: NotionBlock[];
  showTableOfContents?: boolean;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Utility function to extract plain text from rich text array
const extractTextFromRichText = (richTextArray: RichText[]): string => {
  return richTextArray.map(richText => richText.text?.content || '').join('');
};

// Utility function to generate URL-friendly ID from text
const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

const renderRichText = (richTextArray: RichText[]) => {
  return richTextArray.map((richText, index) => {
    let content: React.ReactNode = richText.text?.content || '';
    const annotations = richText.annotations;
    if (content === 'Was the creation of the technology ethical?') {
      console.log({ richText });
    }

    // Apply formatting in nested order to preserve combinations
    if (annotations?.code) {
      content = <code>{content}</code>;
    }
    if (annotations?.bold) {
      content = <strong>{content}</strong>;
    }
    if (annotations?.italic) {
      content = <em>{content}</em>;
    }
    if (annotations?.strikethrough) {
      content = <s>{content}</s>;
    }
    if (annotations?.underline) {
      content = <u>{content}</u>;
    }

    // Handle links
    if (richText.text?.link || richText.href) {
      const url = richText.text?.link?.url || richText.href;
      return (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return <span key={index}>{content}</span>;
  });
};

const renderBlock = (block: NotionBlock, headings?: TocItem[]) => {
  const { type, id } = block;

  switch (type) {
    case 'paragraph':
      return (
        <p key={id}>
          {block.paragraph?.rich_text && renderRichText(block.paragraph.rich_text)}
        </p>
      );

    case 'heading_1': {
      const text = extractTextFromRichText(block.heading_1?.rich_text || []);
      const headingId = generateId(text);
      return (
        <h1 key={id} id={headingId}>
          {block.heading_1?.rich_text && renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    }

    case 'heading_2': {
      const text = extractTextFromRichText(block.heading_2?.rich_text || []);
      const headingId = generateId(text);
      return (
        <h2 key={id} id={headingId}>
          {block.heading_2?.rich_text && renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    }

    case 'heading_3': {
      const text = extractTextFromRichText(block.heading_3?.rich_text || []);
      const headingId = generateId(text);
      return (
        <h3 key={id} id={headingId}>
          {block.heading_3?.rich_text && renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    }

    case 'bulleted_list_item':
      return (
        <li key={id}>
          {block.bulleted_list_item?.rich_text ? 
            renderRichText(block.bulleted_list_item.rich_text) :
            'Empty bulleted list item'
          }
        </li>
      );

    case 'numbered_list_item':
      return (
        <li key={id}>
          {block.numbered_list_item?.rich_text ? 
            renderRichText(block.numbered_list_item.rich_text) :
            'Empty numbered list item'
          }
        </li>
      );

    case 'code':
      return (
        <pre key={id}>
          <code>
            {block.code?.rich_text && renderRichText(block.code.rich_text)}
          </code>
        </pre>
      );

    case 'quote':
      return (
        <blockquote key={id}>
          {block.quote?.rich_text && renderRichText(block.quote.rich_text)}
        </blockquote>
      );

    case 'divider':
      return <hr key={id} />;

    case 'image':
      const imageUrl = block.image?.external?.url || block.image?.file?.url;
      const caption = block.image?.caption && renderRichText(block.image.caption);
      const captionText = block.image?.caption?.map(c => c.text?.content).join('') || 'Image';
      return (
        <figure key={id}>
          {imageUrl && <img src={imageUrl} alt={captionText} />}
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );

    default:
      console.warn(`Unhandled block type: ${type}`, block);
      return (
        <div key={id} style={{ 
          padding: '0.5rem', 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7',
          borderRadius: '4px',
          margin: '0.5rem 0',
          fontSize: '0.9rem',
          color: '#856404'
        }}>
          Unsupported block type: <code>{type}</code>
        </div>
      );
  }
};

const TableOfContents: React.FC<{ headings: TocItem[] }> = ({ headings }) => {
  if (headings.length === 0) return null;

  return (
    <div>
      {/* <h2>
        Table of Contents
      </h2> */}
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{
            marginBottom: '0.5rem',
            paddingLeft: `${(heading.level - 1) * 1.5}rem`,
            listStyleType: 'none'
          }}>
            <a 
              href={`#${heading.id}`}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotionRenderer: React.FC<NotionRendererProps> = ({ blocks, showTableOfContents = false }) => {
  // Extract headings for table of contents
  const headings: TocItem[] = [];
  
  blocks.forEach((block) => {
    if (['heading_1', 'heading_2', 'heading_3'].includes(block.type)) {
      const richTextKey = block.type as 'heading_1' | 'heading_2' | 'heading_3';
      const text = extractTextFromRichText(block[richTextKey]?.rich_text || []);
      if (text.trim()) {
        headings.push({
          id: generateId(text),
          text: text.trim(),
          level: parseInt(block.type.split('_')[1]) // Extract number from 'heading_1', 'heading_2', etc.
        });
      }
    }
  });

  // Group consecutive list items
  const groupedBlocks = [];
  let currentBulletedList = [];
  let currentNumberedList = [];

  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item') {
      if (currentNumberedList.length > 0) {
        groupedBlocks.push({ type: 'numbered_list', items: currentNumberedList });
        currentNumberedList = [];
      }
      currentBulletedList.push(block);
    } else if (block.type === 'numbered_list_item') {
      if (currentBulletedList.length > 0) {
        groupedBlocks.push({ type: 'bulleted_list', items: currentBulletedList });
        currentBulletedList = [];
      }
      currentNumberedList.push(block);
    } else {
      if (currentBulletedList.length > 0) {
        groupedBlocks.push({ type: 'bulleted_list', items: currentBulletedList });
        currentBulletedList = [];
      }
      if (currentNumberedList.length > 0) {
        groupedBlocks.push({ type: 'numbered_list', items: currentNumberedList });
        currentNumberedList = [];
      }
      groupedBlocks.push(block);
    }
  });

  // Add any remaining lists
  if (currentBulletedList.length > 0) {
    groupedBlocks.push({ type: 'bulleted_list', items: currentBulletedList });
  }
  if (currentNumberedList.length > 0) {
    groupedBlocks.push({ type: 'numbered_list', items: currentNumberedList });
  }

  return (
    <>
      {showTableOfContents && <TableOfContents headings={headings} />}
      {groupedBlocks.map((item, index) => {
        if (item.type === 'bulleted_list') {
          return (
            <ul key={`bulleted-${index}`}>
              {item.items.map((block) => renderBlock(block, headings))}
            </ul>
          );
        } else if (item.type === 'numbered_list') {
          return (
            <ol key={`numbered-${index}`}>
              {item.items.map((block) => renderBlock(block, headings))}
            </ol>
          );
        } else {
          return renderBlock(item, headings);
        }
      })}
    </>
  );
};

export default NotionRenderer;