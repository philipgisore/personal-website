import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Code,
  Coffee,
  Award,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const [currentFact, setCurrentFact] = useState(0);

  const funFacts = [
    "I've built over 50+ web applications",
    "Coffee enthusiast - 3 cups minimum per day",
    "I speak 3 programming languages fluently",
    "Night owl - my best code happens after 10PM"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='about'
      className='min-h-screen bg-black p-8 flex items-center justify-center relative'
    >
      <div className='max-w-6xl w-full'>

        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/20'>
            <Code className='w-4 h-4' />
            ABOUT ME
          </div>
          <h2 className='text-4xl font-bold text-white mb-4'>Meet Philip</h2>
          <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
            Full-stack developer passionate about creating digital experiences that matter
          </p>
        </div>

        {/* About Card */}
        <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl relative'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>

            {/* Left Side - Personal Info */}
            <div className='space-y-6'>
              {/* Avatar and Name */}
              <div className='flex items-center gap-6'>
                <div className='relative group'>
                  <div className='w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-0.5 transition-transform group-hover:scale-105'>
                    <div className='w-full h-full rounded-full bg-slate-200 overflow-hidden'>
                      <img
                        src='/api/placeholder/150/150'
                        alt='Philip - Full Stack Developer'
                        className='w-full h-full object-cover transition-transform group-hover:scale-110'
                      />
                    </div>
                  </div>
                  <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse' />
                </div>

                <div>
                  <h3 className='text-3xl font-bold text-orange-400 mb-2'>Philip Gisore</h3>
                  <p className='text-slate-300 font-medium text-lg mb-1'>Full Stack Developer</p>
                  <div className='flex items-center gap-2 text-slate-400 text-sm'>
                    <MapPin className='w-4 h-4' />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { icon: <Calendar className='w-4 h-4 text-orange-400' />, label: 'Status', value: 'Available' },
                  { icon: <Award className='w-4 h-4 text-orange-400' />, label: 'Focus', value: 'Learning' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className='bg-slate-700/30 p-4 rounded-lg border border-slate-600/30'
                  >
                    <div className='flex items-center gap-2 mb-1'>
                      {item.icon}
                      <span className='text-slate-400 text-sm'>{item.label}</span>
                    </div>
                    <p className='text-white font-semibold'>{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Fun Fact */}
              <div className='bg-gradient-to-r from-orange-400/10 to-orange-600/10 p-4 rounded-lg border border-orange-400/20'>
                <div className='flex items-center gap-2 mb-2'>
                  <Coffee className='w-4 h-4 text-orange-400' />
                  <span className='text-orange-400 text-sm font-medium'>Fun Fact</span>
                </div>
                <p className='text-white text-sm transition-all duration-500'>
                  {funFacts[currentFact]}
                </p>
              </div>

              {/* Social Links */}
              <div className='flex gap-3'>
                {[
                  { name: 'Portfolio', url: '#' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/philip-gisore-95a7aa265/' },
                  { name: 'GitHub', url: 'https://github.com/philipgisore' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group'
                  >
                    {link.name}
                    <ExternalLink className='w-3 h-3 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform' />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Story + Tech Stack */}
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h4 className='text-xl font-semibold text-orange-400 mb-4'>My Story</h4>
                <p className='text-slate-300 leading-relaxed'>
                  I'm an aspiring full-stack developer with a passion for creating digital solutions that make a difference.
                  My journey into web development started with curiosity about how websites work, and it quickly grew into a
                  deep fascination with building seamless user experiences.
                </p>
                <p className='text-slate-300 leading-relaxed'>
                  I'm currently focused on mastering React, JavaScript, and modern web technologies. What drives me is the ability
                  to turn ideas into reality through code, and I'm excited to bring fresh perspectives to every project I work on.
                </p>
                <p className='text-slate-300 leading-relaxed'>
                  When I'm not coding, you'll find me learning new technologies, working on personal projects, or enjoying a good
                  cup of coffee while planning my next creation.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h5 className='text-orange-400 font-medium mb-3'>Tech Stack</h5>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS',
                    'Git', 'Figma', 'MySQL', 'Django', 'Learning'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50 hover:border-orange-400/50 hover:text-orange-300 transition-all duration-200'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8'>
          {[
            { label: 'Projects Built', value: '10+', icon: '💻' },
            { label: 'Technologies', value: '9+', icon: '🚀' },
            { label: 'Coffee Cups', value: '∞', icon: '☕' },
            { label: 'Learning Hours', value: 'Daily', icon: '📚' }
          ].map((stat, index) => (
            <div key={index} className='text-center group'>
              <div className='text-2xl mb-2 transition-transform group-hover:scale-110'>{stat.icon}</div>
              <div className='text-2xl md:text-3xl font-bold text-orange-400 mb-1'>{stat.value}</div>
              <div className='text-slate-400 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl' />
      </div>
    </section>
  );
}
