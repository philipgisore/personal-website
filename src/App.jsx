import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <Navbar />
      
      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
      
      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About</h1>
      </section>
      
      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      
      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}




