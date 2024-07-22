// app/api/blog-posts/listSlugs.ts

import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

export async function GET(req: NextRequest) {
  try {
    const databases = new Databases(client);
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string
    );

    const slugs = response.documents.map((post) => post.slug);

    return NextResponse.json(slugs);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return NextResponse.json({ error: 'Failed to fetch slugs' }, { status: 500 });
  }
}
