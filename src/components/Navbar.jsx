console.log('Navbar component file loaded');
import { useState, useRef, useLayoutEffect } from 'react';
import Resume from './Resume'; 

const items = ["home", "about", "projects", "contact"];

export default function Navbar() {
    console.log('Navbar component is rendering');
    const [active, setActive] = useState("home");
    const containerRef = useRef(null);
    const indicatorRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const activeButton = container?.querySelector(`[data-id='${active}']`);
        const indicator = indicatorRef.current;

        if (activeButton && indicator && container) {
            const leftOffset = activeButton.offsetLeft;
            const buttonWidth = activeButton.offsetWidth;

            indicator.style.width = `${buttonWidth}px`;
            indicator.style.transform = `translateX(${leftOffset}px)`;
            indicator.style.opacity = '1'; // Ensure it's visible
        }
    }, [active]);

    const handleNavClick = (id) => {
        setActive(id);
        
        const element = document.getElementById(id);
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const item of items) {
                const element = document.getElementById(item);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActive(item);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent text-white'>
            {/* Logo */}
            <div className='text-white font-bold text-lg'>
                <span className='text-orange-500'>Pg.</span> Philip Gisore
            </div>
            
            {/* Center Navigation Items */}
            <div 
                ref={containerRef}
                className='flex items-center gap-8 relative'
            >
                {items.map((id) => (
                    <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className={`px-4 py-2 capitalize transition-all duration-200 relative z-10 ${
                            active === id 
                                ? "text-orange-500 font-medium" 
                                : "text-gray-300 hover:text-white"
                        }`}
                        data-id={id}
                    >
                        {id}
                    </button>
                ))}
                
            </div>
            <Resume />            
        </nav>
    );
}

