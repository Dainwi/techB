import Image from "next/image";

export default function Page() {
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
          The Art of Minimalism: Decluttering Your Life
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <img className="aspect-square h-full w-full" src="/logomark.png" />
            </span>
            <p className="text-sm font-medium">John Doe</p>
          </div>
          <p className="text-sm text-muted-foreground">Published on July 15, 2024</p>
        </div>
      </div>
      <p>
        In a world consumed by excess and constant stimulation, the art of minimalism offers a refreshing approach to
        living. Minimalism is not just about decluttering your physical space, but rather a mindset that encourages you
        to focus on what truly matters, stripping away the unnecessary to reveal the essential.
      </p>
      <p>
        At its core, minimalism is about intentionality. It&apos;s about consciously choosing to surround yourself with only
        the things that add value to your life, whether that&apos;s material possessions, relationships, or even your daily
        routines. By embracing this philosophy, you can free up mental and physical space, allowing you to live a more
        focused, purposeful, and fulfilling life.
      </p>
      <p>
        One of the key benefits of minimalism is the sense of clarity and calm it can bring to your life. When you
        remove the clutter and distractions, you&apos;re better able to prioritize your time and energy, focusing on the
        things that truly matter to you. This can lead to increased productivity, reduced stress, and a greater sense of
        overall well-being.
      </p>
      <p>
        But minimalism is not just about the practical benefits; it&apos;s also a deeply personal journey of self-discovery.
        By letting go of the things that no longer serve you, you create space for new experiences, relationships, and
        opportunities to emerge. It&apos;s a way of living that encourages you to be more mindful, more intentional, and more
        present in your daily life.
      </p>
      <p>
        Ultimately, the art of minimalism is about finding the perfect balance between the things you need and the
        things you want. It&apos;s about learning to appreciate the beauty in simplicity and recognizing that less can often
        be more. By embracing this philosophy, you can unlock a world of freedom, clarity, and fulfillment.
      </p>
    </article>


  )
}