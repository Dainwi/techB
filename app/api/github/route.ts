import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { NEXT_PUBLIC_GITHUB_USERNAME, NEXT_PUBLIC_GITHUB_TOKEN } = process.env;

  try {
    const response = await fetch(`https://api.github.com/users/${NEXT_PUBLIC_GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repositories = await response.json();
    return NextResponse.json(repositories);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return new NextResponse(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
