import Hero from "./components/Hero";
import Latestblog from "./components/Latestblog";


export default function Home() {
  return (
    <main className="container mx-auto  ">
        <Hero/>
        <Latestblog/>
    </main>
  );
}
