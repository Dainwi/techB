export default function Latestblog(){
    return(
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
    );
}