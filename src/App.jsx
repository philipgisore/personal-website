import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';

export default function App() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <Navbar />
      
      <Hero />
      <About />
      
      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}




