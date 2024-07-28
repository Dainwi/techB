'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function About() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('/api/github', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch (error) {
        let errorMessage = 'An unknown error occurred';

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        setError(errorMessage);
        console.error('Error fetching repositories:', errorMessage);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-90"
          src="/aboutdc.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/logomark.png"
              alt="dainwi choudhary"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-6">
              Hi, I&apos;m Dainwi, a full stack developer passionate about building web applications
              and contributing to open-source projects. I love to explore new technologies
              and help people solve problems through code.
            </p>
            <h2 className="text-2xl font-semibold mb-4 ">Skills</h2>
            <ul className="flex flex-wrap justify-center space-x-4 mb-6">
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">JavaScript</li>
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">React</li>
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">Node.js</li>
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">Next.js</li>
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">Appwrite</li>
              <li className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 my-3 rounded-full bg-amber-100">Tailwind CSS</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {error ? (
                <p className="text-[hsl(var(--destructive))]">{error}</p>
              ) : (
                repositories.map((repo) => (
                  <div key={repo.id} className="p-4 bg-[hsl(var(--card))] bg-amber-300 text-[hsl(var(--card-foreground))] rounded-lg shadow-md hover:bg-amber-100 transition-shadow duration-300">
                    <h3 className="text-xl font-bold">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline">
                        {repo.name}
                      </a>
                    </h3>
                    <p className="mt-2">{repo.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
