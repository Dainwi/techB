/* eslint-disable @next/next/no-img-element */

'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  $id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  author: string;
  content: string;
}

export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to fetch blog posts');
      }
    };

    fetchBlogPosts();
  }, []);

  // Function to render Markdown content using ReactMarkdown
  const renderMarkdownToJSX = (markdown: string) => (
    <ReactMarkdown className="prose prose-gray max-w-full">{markdown}</ReactMarkdown>
  );

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-3 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.$id}>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <Image 
                  src="/blog.jpg" 
                  alt={`Image for ${post.title}`} 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover" 
                  style={{ aspectRatio: '600 / 400', objectFit: 'cover' }} 
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs font-medium ml-2">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <div className="text-muted-foreground text-sm">
                    {renderMarkdownToJSX(post.description)}
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 mr-2">
                    <img className="aspect-square h-full w-full" alt={post.author} src="/logomark.png" />
                  </span>
                  <span className="text-muted-foreground text-sm">{post.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
