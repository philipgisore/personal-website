import HeroButtons from "../components/HeroButtons";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Enhanced background effects with better responsiveness */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                {/* Additional ambient orb for larger screens */}
                <div className="hidden lg:block absolute top-1/2 left-1/6 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse opacity-40" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Responsive animated grid pattern overlay */} 
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }}>
                </div>
            </div>
            
            {/* Responsive corner lines with better mobile spacing */}
            <div className="absolute top-16 sm:top-20 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-orange-500 opacity-80 animate-pulse"/>
            <div className="absolute top-16 sm:top-20 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}/>
            <div className="absolute bottom-8 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '1s'}}/>
            <div className="absolute bottom-8 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '1.5s'}}/>

            {/* Main content container with enhanced responsive design */}
            <div className="relative z-10 text-center max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">

                {/* Enhanced heading with better mobile typography */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                    <span className="block sm:inline">Hi, I'm{' '}</span>
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse"> 
                        Philip
                    </span>{' '}
                    <span className="inline-block animate-bounce" style={{animationDelay: '2s'}}>👋</span>
                </h1>

                {/* Enhanced typography with better mobile readability */}
                <div className="mb-6 sm:mb-8">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300 leading-relaxed mb-3 sm:mb-4">
                        Empowering brands with custom, high-converting websites
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                        that are appealing, brand-accurate, & user-friendly
                    </p>
                </div>

                {/* Enhanced responsive skills display */}
                <div className="mb-8 sm:mb-10 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
                    {['HTML5', 'Tailwind CSS', 'Javascript', 'React', 'Next.js'].map((tech, index) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-orange-500 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <HeroButtons />

                {/* Enhanced scroll indicator with better mobile positioning */}
                <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center text-gray-400">
                        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center mb-2">
                            <div className="w-1 h-2 sm:h-3 bg-orange-500 rounded-full mt-1.5 sm:mt-2 animate-pulse"/>
                        </div>
                        <span className="text-xs uppercase tracking-wider hidden sm:block">Scroll to explore</span>
                        <span className="text-xs uppercase tracking-wider sm:hidden">Scroll</span>
                    </div>
                </div>
            </div>

            {/* Enhanced floating elements with responsive positioning */}
            <div className="absolute top-1/3 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-ping opacity-75"/>
            <div className="absolute top-2/3 right-8 sm:right-16 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}/>
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}/>
            
            {/* Additional floating elements for larger screens */}
            <div className="hidden md:block absolute top-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" style={{animationDelay: '3s'}}/>
            <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-30" style={{animationDelay: '4s'}}/>

            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
        </section>
    );
}