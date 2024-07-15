import Image from "next/image";

export default function Hero(){
    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 place-items-center">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#135D66]">
                Discover the Latest Insights and Trends in Our Blog
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Stay up-to-date with our thought-provoking articles and expert analysis on a wide range of topics.
              </p>
              <a href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Read the Blog
              </a>
            </div>
            <Image src="/blog.jpg" width={1270} height={1000} alt="Hero" style={{}} className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover" />
          </div>
        </div>
      </section>
    )
}