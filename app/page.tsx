import Image from "next/image";

export default function Home() {
  return (



<main className="flex flex-col min-h-[100dvh]">
  <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
        <path d="M16 8 2 22" />
        <path d="M17.5 15H9" />
      </svg>
      <span className="font-bold text-xl ml-2">Blog</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Home
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Blog
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        About
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Contact
      </a>
    </nav>
  </header>
  <main className="flex-1">
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Discover the Latest Insights and Trends in Our Blog
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Stay up-to-date with our thought-provoking articles and expert analysis on a wide range of topics.
            </p>
            <a href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Read the Blog
            </a>
          </div>
          <Image src="/logomark.png" width={1270} height={1000} alt="Hero" style={{}} className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover" />
        </div>
      </div>
    </section>
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
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Future of Web Development</h3>
                <p className="text-sm text-muted-foreground">By John Doe | June 1, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Explore the latest trends and technologies shaping the future of web development.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Rise of Artificial Intelligence</h3>
                <p className="text-sm text-muted-foreground">By Jane Smith | May 15, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Discover how AI is transforming industries and revolutionizing the way we live and work.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Sustainable Living: Tips and Tricks</h3>
                <p className="text-sm text-muted-foreground">By Sarah Johnson | April 20, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Learn practical ways to reduce your carbon footprint and live a more eco-friendly lifestyle.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Importance of Mental Health</h3>
                <p className="text-sm text-muted-foreground">By Michael Brown | March 30, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Explore strategies for maintaining a healthy mind and finding balance in our fast-paced world.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Future of Remote Work</h3>
                <p className="text-sm text-muted-foreground">By Emily Davis | February 10, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Discover the latest trends and best practices for thriving in a remote work environment.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">The Power of Storytelling in Marketing</h3>
                <p className="text-sm text-muted-foreground">By David Lee | January 5, 2023</p>
                <p className="text-sm text-muted-foreground">
                  Learn how to leverage the art of storytelling to captivate your audience and drive business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-muted-foreground">© 2024 Blog. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Facebook
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Twitter
      </a>
    </nav>
  </footer>
</main>


  );
}
