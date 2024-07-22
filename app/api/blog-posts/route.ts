import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

const databases = new Databases(client);

const { NEXT_PUBLIC_DATABASE_ID, NEXT_PUBLIC_COLLECTION_ID } = process.env;

export async function GET(req: NextRequest) {
  try {
    const result = await databases.listDocuments(
      NEXT_PUBLIC_DATABASE_ID as string,
      NEXT_PUBLIC_COLLECTION_ID as string,
      []
    );

    return NextResponse.json(result.documents);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
