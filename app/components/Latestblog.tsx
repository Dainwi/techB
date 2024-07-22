'use client'
import { useEffect, useState } from 'react';
import { Client, Databases, Query, Models } from 'appwrite';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

interface BlogPost extends Models.Document {
  title: string;
  published_on: number;
  description: string;
  slug: string;
  content: string;
  image: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const databases = new Databases(client);
  const response = await databases.listDocuments<BlogPost>(
    process.env.NEXT_PUBLIC_DATABASE_ID as string,
    process.env.NEXT_PUBLIC_COLLECTION_ID as string,
    [Query.orderDesc('published_on')]
  );
  return response.documents;
}

export default function LatestBlog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our latest blog posts and stay informed on the topics that matter to you.
            </p>
          </div>
        </div>
        <div className="mx-auto my-6 grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.$id}>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm block hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Published on {new Date(post.published_on).toLocaleDateString(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                      })}
                    </p>
                    <ReactMarkdown className="markdown text-sm text-muted-foreground">
                      {post.description.length > 128
                        ? post.description.slice(0, 128) + '...'
                        : post.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
