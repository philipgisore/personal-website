import Navbar from "./components/Navbar";
import { Element } from "react-scroll";

export default function App() {
   console.log('App is rendering');
  return (
    <div>
      <Navbar />

      <Element name="home" className="h-screen bg-red-100 flex justify-center items-center">
        <h1 className="text-4xl">Home</h1>
      </Element>

      <Element name="about" className="h-screen bg-green-100 flex justify-center items-center">
        <h1 className="text-4xl">About</h1>
      </Element>

      <Element name="projects" className="h-screen bg-blue-100 flex justify-center items-center">
        <h1 className="text-4xl">Projects</h1>
      </Element>

      <Element name="contact" className="h-screen bg-yellow-100 flex justify-center items-center">
        <h1 className="text-4xl">Contact</h1>
      </Element>
    </div>
  );
}



