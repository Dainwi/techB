'use client'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  $id: string;
  title: string;
  published_on: number;
  description: string;
  slug: string;
  content: string;
  image: string;
}

export default function LatestBlog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className='text-center text-gray-400 my-6'>Loading....</p>
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-90"
          src="/contact.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="relative z-10 text-gray-200 container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold  text-gray-200 tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
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
                   src="/last.jpg"
                   width={1270}
                   height={1000}
                   alt="Hero"
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
