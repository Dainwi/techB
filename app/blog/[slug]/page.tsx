import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  author: string;
  content: string;
  image?: string;
}

export async function generateStaticParams() {
  const res = await fetch('https://technologyblog.vercel.app/api/blog-posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch blog posts:', res.statusText);
    return [];
  }

  const data = await res.json();
  const paths = data.map((post: BlogPost) => ({
    slug: post.slug,
  }));

  return paths;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post: BlogPost | null = null;

  try {
    const res = await fetch(`https://technologyblog.vercel.app/api/blog-posts/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog post: ${res.statusText}`);
    }

    post = await res.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return <p>Post not found or error occurred</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-90"
          src="/herodc.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="relative z-10 flex justify-center">
        <div className="container mx-auto my-3 p-2 bg-background bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
            <Image 
              src={post.image || '/blog.jpg'} 
              alt={`Image for ${post.title}`} 
              width={600} 
              height={400} 
              className="w-full h-full object-cover" 
              style={{ aspectRatio: '600 / 400', objectFit: 'cover' }} 
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="text-muted-foreground text-xs font-medium ml-2">{post.date}</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="text-muted-foreground text-sm mb-4">
              <ReactMarkdown className="prose prose-gray max-w-full">{post.description}</ReactMarkdown>
            </div>
            <div className="text-muted-foreground text-sm">
              <ReactMarkdown className="prose prose-gray max-w-full">{post.content}</ReactMarkdown>
            </div>
            <div className="flex items-center mt-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 mr-2">
                <img className="aspect-square h-full w-full" alt={post.author} src="/logomark.png" />
              </span>
              <span className="text-muted-foreground text-sm">{post.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
