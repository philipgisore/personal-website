import HeroButtons from "../components/HeroButtons";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Animated grid pattern overlay*/} 
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}>

                </div>
            </div>
            
            {/*Enhnaced corner lines with animation -MOVED DOWN to avoid navbar clash*/}
            <div className="absolute top-20 left-8 w-12 h-12 border-t-2 border-l-2 border-orange-500 opacity-80 animate-pulse"/>
            <div className="absolute top-20 right-8 w-12 h-12 border-t-2 border-r-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}/>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '1s'}}/>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-orange-500 opacity-80 animate-pulse" style={{animationDelay: '1.5s'}}/>

            {/* Main content container with relative positioning for z-index */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">

                {/*Enhanced heading with gradient text and better spacing */}
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse"> 
                        Philip
                    </span>{' '}
                    <span className="inline-block animate-bounce" style={{animationDelay: '2s'}}>👋</span>
                </h1>

                {/*Better Typography hierarchy and spacing*/}
                <div>
                    <p className="text-xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
                        Empowering brands with custom, high-converting websites
                    </p>
                    <p className="mb-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        that are appealing, brand-accurate, & user-friendly
                    </p>
                </div>

                {/*Enhanced skills/tech stack display */}
                <div className="mb-10 flex flex-wrap justify-center gap-3 text-sm md:text-base">
                    {['HTML5', 'Tailwind CSS', 'Javascript', 'React'].map((tech, index) => (
                        <span
                            key={tech}
                            className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-orange-500 transition-all duration-300"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <HeroButtons />

                {/*Scroll down indicator*/}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center text-gray-400">
                        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mb-2">
                            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"/>
                        </div>
                        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                    </div>
                </div>
            </div>

            {/* Floating Elements for visual interest */}
            <div className="absolute top-1/3 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75"/>
            <div className="absolute top-2/3 right-16 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}/>
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}/>
        </section>
    );
}