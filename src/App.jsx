import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="bg-pink-100 min-h-screen">
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}




