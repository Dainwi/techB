import { Client, Databases, Query } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

const databases = new Databases(client);

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      [Query.equal('slug', slug)]
    );

    if (response.documents.length === 0) {
      return new Response('Not Found', { status: 404 });
    }

    const post = response.documents[0];
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return new Response('Error fetching blog post', { status: 500 });
  }
}
