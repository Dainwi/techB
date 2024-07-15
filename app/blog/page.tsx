'use client'
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Client, Databases, Models } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6694d7e7003491b18c98');

interface BlogPost extends Models.Document {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  author: string;
}

export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const databases = new Databases(client);
        const response = await databases.listDocuments<BlogPost>(
          '6694e0fd0014dc3a6f44',
          '6694e24f00089d362812',
        );
        setBlogPosts(response.documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPosts();
  }, []); // Empty array ensures this effect runs only once

  return (
    <div className="container mx-auto my-3 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.$id} className="bg-background rounded-lg shadow-lg overflow-hidden flex">
            <Link href={`/blog/${post.slug}`}>
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
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-xs font-medium ml-2">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground text-sm">{post.description}</p>
                <div className="flex items-center mt-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 mr-2">
                    <img className="aspect-square h-full w-full" alt={post.author} src="/logomark.png" />
                  </span>
                  <span className="text-muted-foreground text-sm">{post.author}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
