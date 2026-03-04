import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex items-center min-h-screen px-10 md:px-20 py-16">
      <div className="max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Hi{" "}
          <span
            className="inline-block"
            style={{
              animation: "waveHand 2.5s ease 1s 2",
              transformOrigin: "70% 80%",
              display: "inline-block",
            }}
          >
            👋
          </span>
          , I'm Philip Gisore
        </h1>

        {/* Bio */}
        <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-xl">
          I'm a Frontend Developer who transforms complex ideas into elegant,
          production-ready solutions. I specialize in building scalable web
          applications using React, JavaScript, Next.js, and modern UI practices.
        </p>

        {/* Links */}
        <p className="text-gray-400 mb-8">
          Check out my{" "}
          <Link
            to="/projects"
            className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
        >
            projects
        </Link>
          {" "}or{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
          >
            my resume
          </a>
        </p>

        {/* See more */}
        <a
          href="/about"
          className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
        >
          See more about me <ArrowUpRight size={16} />
        </a>

      </div>

      <style>{`
        @keyframes waveHand {
          0%,60%,100% { transform: rotate(0deg); }
          15%,35%     { transform: rotate(20deg); }
          25%         { transform: rotate(-6deg); }
        }
      `}</style>
    </section>
  );
}