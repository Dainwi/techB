import Hero from "./components/Hero";
import Latestblog from "./components/Latestblog";


export default function Home() {
  return (
    <main className="container mx-auto ">

      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-90"
          src="/contact.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="relative z-10 container space-y-10 xl:space-y-16">
        <Hero />
        <Latestblog />
      </div>
    </main>
  );
}
