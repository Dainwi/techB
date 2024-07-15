import Hero from "./components/Hero";
import Latestblog from "./components/Latestblog";


export default function Home() {
  return (



    <main className="flex flex-col min-h-[100dvh] mx-auto container">
      <div className="flex-1">
        <Hero/>
        <Latestblog/>
        
      </div>
    </main>


  );
}
