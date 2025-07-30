import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Sparkles, Eye, ArrowRight, Play, Subtitles } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(new Set());
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            Subtitle: 'Admin Control Center',
            description: 'A comprehensive dashboard for managing online stores with real-time analytics. inventory tracking, and order management. Built with modern React patterns and optimized for perfomance.',
            features: ['real-time Analytics', 'Inventory management', 'Order processing', 'Sales Reports'],
            image: '/api/placeholder/600/400',
            tags: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS'],
            githubUrl: '#',
            liveUrl: '#',
            category: 'Full-Stack',
            color: 'from-blue-500/20 to-purple-500/20'
        },
        {
            id: 2,
            title: 'Weather Forecast Hub',
            Subtitle: 'Meteorological Intelligence',
            description: 'An elegant weather application providing accurate forecasts with beautiful visualizations. Features location services, weather maps, and severe weather alerts for comprehensive weather tracking.',
            features: ['7-day Forecasts', 'Weather maps', 'Location Services', 'Alert System'],
            image: '/api/placeholder/600/400',
            tags: ['JavaScript', 'Weather API', 'D3.js', 'CSS3'],
            githubUrl: '#',
            liveUrl: '#',
            category: 'Frontend',
            color: 'from-cyan-500/20 to-blue-500/20'
        },
        {
            id: 3,
            title: 'Team Collaboration Platform',
            subtitle: 'Productivity Reimagined',
            description: 'A modern task management platform designed for remote teams. Features kanban boards, real-time chat, file sharing, and progress tracking to boost team productivity and communication.',
            features: ['Kanban Boards', 'Real-time Chat', 'File Sharing', 'Team Analytics'],
            image: '/api/placeholder/600/400',
            tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
            githubUrl: '#',
            liveUrl: '#',
            category: 'Full-Stack',
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            id: 4,
            title: 'Portfolio Showcase',
            subtitle: 'Digital Identity',
            description: 'A responsive portfolio website with smooth animations and modern design principles. Optimized for performance, SEO, and accessibility with dark/light mode toggle and contact integration.',
            features: ['Responsive Design', 'SEO Optimized', 'Dark Mode', 'Contact Forms'],
            image: '/api/placeholder/600/400',
            tags: ['React', 'Framer Motion', 'Tailwind', 'Netlify'],
            githubUrl: '#',
            liveUrl: '#',
            category: 'Frontend',
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            id: 5,
            title: 'Recipe Discovery Engine',
            subtitle: 'Culinary Exploration',
            description: 'An intelligent recipe finder with advanced search capabilities, nutritional analysis, and meal planning features. Users can discover new recipes, save favorites, and generate shopping lists.',
            features: ['Smart Search', 'Nutrition Analysis', 'Meal Planning', 'Shopping Lists'],
            image: '/api/placeholder/600/400',
            tags: ['Vue.js', 'Recipe API', 'Vuex', 'SCSS'],
            githubUrl: '#',
            liveUrl: '#',
            category: 'Frontend',
            color: 'from-pink-500/20 to-purple-500/20'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const projectId = parseInt(entry.target.dataset.projectId);
                        setTimeout(() => {
                            setVisibleProjects(prev => new Set([...prev, projectId]));
                        }, entry.target.dataset.delay || 0);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px'
            }
        );

        const projectElements = document.querySelectorAll('[data-project-id')
        projectElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section 
        id='projects'
        className='min-h-screen bg-black py-20 px-8 relative overflow-hidden'>
            {/* Cools Animated background */}
            <div className='absolute inset-0'>
                {/* Animated Grid */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px, transparent_1px)] bg-[size:100px_100px] animate-pulse' />

                {/* Floating Orbs */}
                <div className='absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse' />
                <div className='absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse delay-1000' />
                <div className='absolute top-1/2 left-1/2 w-96 h-64 bg-gradient-to-r from-green-400/6 to-cyan-400/6 rounded-full blur-3xl animate-pulse delay-2000' />

                {/* Moving Geometric Shapes */}
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i}
                        className='absolute border border-orange-400/10 rounded-lg animate-float'
                        style={{
                            width: `${20 + (i * 10)}px`,
                            height: `${20 + (i * 10)}px`,
                            left: `${10 + (i * 12)}px`,
                            top: `${15 + (i * 10)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${8 + (i * 2)}s`,
                            transform: `rotate(${i * 45}deg)`
                        }}
                    />
                ))}

                {/* Particle System */}
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i}
                        className='absolute w-1 h-1 bg-orange-400/30 rounded-full animate-twinkle'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() *2}s`
                        }}
                    />
                ))}
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>

                {/* header */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-6 px-6 py-3 bg-gradient-to-r from-orange-400/10 to-transparent rounded-full border border-orange-400/20 backdrop-blur-sm'>
                        <Code className='w-4 h-4 animate-pulse' />
                        FEATURED PROJECTS
                        <Sparkles className='w-4 h-4 animate-pulse'/>
                    </div>

                    <h2 className='text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-white mb-6'>
                        My Work
                    </h2>

                    <p className='text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed'>
                        Discover the projects that showcase my journey in web development.
                        Each creation tells a story of problem solving, creativity, and continuous learning.
                    </p>
                </div>

                {/* Projects Showcase */}
                <div className='space-y-24'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-project-id={project.id}
                            data-delay={index * 200}
                            className={`transition-all duration-1000 ease-out ${
                                visibleProjects.has(project.id)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-16' 
                            }`}
                        >
                            <div className={`grid lg:grid-cols-12 gap-8 items-center ${
                                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                            }`}>

                                {/* Partial Card-Image Side */}
                                <div className={`lg:col-span-7 relative group ${
                                    index % 2 === 1 ? 'lg:col-start-6' : ''
                                }`}>
                                    <div 
                                        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-2xl`}
                                        style={{ transform: 'scale(1.1)'}}
                                    />
                                    <div
                                        className='relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-orange-400/50 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-orange-400/10'
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        {/*Category Badge */}
                                        <div className='absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-sm text-orange-400 text-xs font-semibold rounded-full border border-orange-400/50'>
                                            {project.category}
                                        </div>

                                        <div className='relative overflow-hidden'>
                                            <img 
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:sclae-110'
                                            />

                                            {/* Gradient overlay */}
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300' />

                                            {/* hover Actions */}
                                            <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                                                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                                <a 
                                                    href={project.liveUrl}
                                                    className='flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-semibold rounded-xl hover:bg-orange-400 hover:text transition-all duration-200 transform hover:scale-105'
                                                >
                                                    <Play className='w-4 h-4'/>
                                                    Live Demo
                                                </a>
                                                <a 
                                                    href={project.githubUrl}
                                                    className='flex items-center gap-2 px-6 py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105'
                                                >
                                                    <Github className='w-4 h-4' />
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Side */}
                                <div className={`lg:col-span-5 space-y-6 ${
                                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                                } ${
                                    visibleProjects.has(project.id)
                                    ? 'animate-slide-in-left'
                                    : ''
                                }`}>

                                    <div className='space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className='text-3xl lg:text-4xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300'>
                                                {project.title}
                                            </h3>
                                            <p className='text-lg text-orange-400 font-medium'>
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        <p className='text-slate-300 text-lg leading-relaxed'>
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Key Features */}
                                    <div className='space-y-3'>
                                        <h4 className='text-orange-400 font-semibold flex items-center gap-2'>
                                            <Sparkles className='w-4 h-4'/>
                                            Key Features
                                        </h4>
                                        <div className='grid grid-cols-2 gap-3'>
                                            {project.features.map((feature, featureIndex) => (
                                                <div
                                                    key={featureIndex}
                                                    className='flex items-center gap-2 text-slate-400'
                                                    style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms`}}
                                                >
                                                    <div className='w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse'/>
                                                    <span  className='text-sm'>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className='space-y-3'>
                                        <h4 className='text-orange-400 font-semibold'>Built with</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className='px-3 py-1 bg-slate-800/50 backdrop-blur-sm text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 hover:text-orange-300 transition-all duration-200 transform hover:scale-105'
                                                    style={{ animationDelay: `${(index * 200) + (tagIndex * 50)}ms`}}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex gap-4 pt-4'>
                                        <a 
                                            href={project.liveUrl}
                                            className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-500 hover:to-orange-700 transition-all duration-200 transform-hover:scale-105 group'
                                        >
                                            <Eye className='w-4 h-4 group-hover:scale-110 transition-transform'/>
                                            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform'/>
                                        </a>

                                        <a 
                                            href={project.githubUrl}
                                            className='flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 hover:text-white hover:border-slate-600/50 transition-all duration-200'
                                        >
                                            <Github className='w-4 h-4' />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className='text-center mt-32 pt-16 border-t border-slate-800/30'>
                    <div className='inline-flex items-center gap-2 text-orange-400 mb-6'>
                        <Sparkles className='w-5 h-5 animate-pulse'/>
                        <span className='font-medium'>More amazing projects in development</span>
                    </div>
                    <p className='text-slate-500 text-lg'>
                        Each project is a step forward in my journey. Stay tuned for what's coming next!
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0$, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }

                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .animate-float {
                    animation: twinkle ease-in-out infinite;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out;
                }
            `}</style>
        </section>
    )
}