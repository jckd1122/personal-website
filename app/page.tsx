import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import AITwin from "./sections/AITwin";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <AITwin />
    </main>
  );
}
