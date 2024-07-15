// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Client, Databases, Query } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6694d7e7003491b18c98');

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  author: string;
  content: string;
}

async function fetchPost(slug: string): Promise<BlogPost | null> {
  const databases = new Databases(client);
  const response = await databases.listDocuments(
    '6694e0fd0014dc3a6f44',
    '6694e24f00089d362812',
    [Query.equal('slug', slug)]
  );

  if (response.documents.length === 0) {
    return null;
  }

  return response.documents[0] as BlogPost;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
      <div className="space-y-2 not-prose">
        <Image
          src="/blog.jpg"
          alt="Featured Image"
          width={1200}
          height={600}
          className="aspect-video overflow-hidden rounded-lg object-cover"
        />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <img className="aspect-square h-full w-full" src="/logomark.png" alt="Author Avatar" />
            </span>
            <p className="text-sm font-medium">{post.author}</p>
          </div>
          <p className="text-sm text-muted-foreground">Published on {post.date}</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export async function generateStaticParams() {
  const databases = new Databases(client);
  const response = await databases.listDocuments('6694e0fd0014dc3a6f44', '6694e24f00089d362812');

  return response.documents.map((post) => ({
    slug: post.slug,
  }));
}
