import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-pink-100 min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}




