/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Client, Databases, Query, Models } from 'appwrite'; // Import Models
import ReactMarkdown from 'react-markdown';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6694d7e7003491b18c98');

// Define a generic interface extending Models.Document
interface BlogPost extends Models.Document {
  slug: string;
  title: string;
  category: string;
  published_on: string;
  description: string;
  author: string;
  content: string;
  image: string;
}

async function fetchPost(slug: string): Promise<BlogPost | null> {
  const databases = new Databases(client);
  const response = await databases.listDocuments<BlogPost>(
    '6694e0fd0014dc3a6f44',
    '6694e24f00089d362812',
    [Query.equal('slug', slug)]
  );

  if (response.documents.length === 0) {
    return null;
  }

  return response.documents[0];
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await fetchPost(params.slug);
      if (postData) {
        setPost(postData);
      } else {
        notFound();
      }
    };

    fetchPostData();
  }, [params.slug]);

  if (!post) {
    return <span className="loader"></span>; // Placeholder for loading state
  }

  return (
    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
        <Image
          src={post.image}
          alt="Featured Image"
          width={1200}
          height={600}
          className="aspect-video overflow-hidden rounded-lg object-cover my-5"
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <img className="aspect-square h-full w-full" src="/logomark.png" alt="Author Avatar" />
            </span>
            <p className="text-sm font-medium">{post.author}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Published on {new Date(post.published_on).toLocaleDateString(undefined, {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })}
          </p>
        </div>
      </div>
      <ReactMarkdown className="prose prose-gray max-w-3xl mx-auto dark:prose-invert markdown">
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
