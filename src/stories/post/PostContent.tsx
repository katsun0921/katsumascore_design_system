import React from 'react';
import '@/scss/object/project/_postContent.scss';

interface PostContentProps {
  /**
   * WordPress post content HTML string
   */
  content: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const PostContent = ({
  content,
  className = '',
  ...props
}: PostContentProps) => {
  return (
    <div
      className={`p-post ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
};
