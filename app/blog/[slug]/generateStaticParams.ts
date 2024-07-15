// app/blog/[slug]/generateStaticParams.ts

import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6694d7e7003491b18c98');

export async function generateStaticParams() {
  const databases = new Databases(client);
  const response = await databases.listDocuments(
    '6694e0fd0014dc3a6f44',
    '6694e24f00089d362812'
  );

  const paths = response.documents.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
